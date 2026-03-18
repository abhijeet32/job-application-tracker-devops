output "job_tracker_eks_cluster_sg_id" {
    description = "SG ID of EKS cluster"
    value = aws_security_group.job_tracker_eks_cluster_sg.id
}

output "job_tracker_node_group_sg_id" {
    description = "SG ID of node groups"
    value = aws_security_group.job_tracker_node_group_sg.id
}