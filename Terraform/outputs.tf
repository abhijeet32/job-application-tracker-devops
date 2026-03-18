output "vpc_id" {
    description = "ID of the VPC"
    value = module.vpc.vpc_id
}

output "public_subnet_ids" {
    description = "IDs of public subnet"
    value = module.vpc.public_subnet_ids
}

output "private_subnet_ids" {
    description = "IDs of private subnet"
    value = module.vpc.private_subnet_ids
}

output "internet_gateway_id" {
    description = "ID of internet gateway"
    value = module.vpc.internet_gateway_id
}

output "nat_gateway_id" {
    description = "ID of nat gateway"
    value = module.vpc.internet_gateway_id
}

output "cluster_role_arn" {
    description = "IAM role ARN for Cluster"
    value = module.iam.cluster_role_arn
}

output "node_role_arn" {
    description = "IAM role ARN for Worker Nodes"
    value = module.iam.node_role_arn
}

output "job_tracker_eks_cluster_sg_id" {
    value = module.security_groups.job_tracker_eks_cluster_sg_id
}

output "job_tracker_node_group_sg_id" {
    value = module.security_groups.job_tracker_node_group_sg_id
}

output "cluster_name" {
    value = module.eks.cluster_name
}

output "cluster_endpoint" {
    value = module.eks.cluster_endpoint
}