terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      # don't use newer versions than 3.x.x
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  # default settings
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-cloud-resume-dev"
  location = "westeurope"
  
  tags = {
    environment = "dev"
    project     = "cloud-resume"
    managed_by  = "terraform"
  }
}

resource "azurerm_cosmosdb_account" "db" {
  name                = "cosmos-cloud-resume-dev"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  offer_type         = "Standard"
  kind               = "GlobalDocumentDB"

  consistency_policy {
    consistency_level = "Session"
  }

  geo_location {
    location          = azurerm_resource_group.rg.location
    failover_priority = 0
  }

  capabilities {
    # activate serveless
    name = "EnableServerless"  
  }

  tags = azurerm_resource_group.rg.tags
}

resource "azurerm_cosmosdb_sql_database" "db" {
  name                = "visitorDB"
  resource_group_name = azurerm_resource_group.rg.name
  account_name        = azurerm_cosmosdb_account.db.name
}

resource "azurerm_cosmosdb_sql_container" "counter" {
  name                = "visitors"
  resource_group_name = azurerm_resource_group.rg.name
  account_name        = azurerm_cosmosdb_account.db.name
  database_name       = azurerm_cosmosdb_sql_database.db.name
  partition_key_path  = "/id"
}

resource "azurerm_static_site" "web" {
  name                = "swa-cloud-resume-dev"
  resource_group_name = azurerm_resource_group.rg.name
  location           = azurerm_resource_group.rg.location
  tags               = azurerm_resource_group.rg.tags
}

output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "static_web_app_url" {
  value = azurerm_static_site.web.default_host_name
}

output "cosmos_db_endpoint" {
  value     = azurerm_cosmosdb_account.db.endpoint
  sensitive = true
}

output "cosmos_db_primary_key" {
  value     = azurerm_cosmosdb_account.db.primary_key
  sensitive = true
}