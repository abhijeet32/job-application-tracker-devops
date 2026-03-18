resource "aws_eks_cluster" "job_tracker_eks_cluster" {
    name = var.cluster_name
    role_arn = var.cluster_role_arn

    vpc_config {
        subnet_ids = var.subnet_ids
        security_group_ids = [var.cluster_sg_ids]
    }

    depends_on = [
        var.cluster_role_arn
    ]
}