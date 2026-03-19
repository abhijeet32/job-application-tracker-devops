variable "cluster_name" {
    description = "Cluster name for the node group"
    type = string
}

variable "node_role_arn" {
    description = "Role for node ARN"
    type = string
}

variable "subnet_ids" {
    description = "IDs of subnets"
    type = list(string)
}

variable "instance_types" {
    description = "Instance types for node group"
    type = list(string)
    default = ["t3.medium"]
}

variable "desired_size" {
    description = "Desired number of worker nodes"
    type = number
    default = 2
}

variable "max_size" {
    description = "Maximum number of worker nodes"
    type = number
    default = 3
}

variable "min_size" {
    description = "Minimum number of worker nodes"
    type = number
    default = 1
}