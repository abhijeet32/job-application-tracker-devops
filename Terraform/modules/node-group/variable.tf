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