output "cluster_name" {
    value = aws_eks_cluster.job_tracker_eks_cluster.name
}

output "cluster_endpoint" {
    value = aws_eks_cluster.job_tracker_eks_cluster.endpoint
}