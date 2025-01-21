# main.tf
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

resource "azurerm_resource_group" "test" {
  name     = "rg-terraform-test"
  location = "West Europe"
  
  tags = {
    environment = "test"
    project     = "terraform-test"
  }
}