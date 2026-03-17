variable "vpc_cidr" {
    description = "CIDR block for the VPC"
    type = string
}

variable "public_subnet_cidr" {
    description = "Public subnet CIDR blocks"
    type = list(string)
}

variable "private_subnet_cidr" {
    description = "Private subnet CIDR blocks"
    type = list(string)
}

variable "availability_zones" {
    description = "Avaibability Zones"
    type = list(string)
}