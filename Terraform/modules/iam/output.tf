output "cluster_role_arn" {
    description = "IAM role ARN for Cluster"
    value = aws_iam_role.job_tracker_eks_cluster_role.arn
}

output "node_role_arn" {
    description = "IAM role ARN for Worker Nodes"
    value = aws_iam_role.job_tracker_node_role.arn
}