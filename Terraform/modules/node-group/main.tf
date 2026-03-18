resource "aws_eks_node_group" "Job_trakcer-nodes" {
    cluster_name = var.cluster_name
    node_group_name = var.cluster_name
    node_role_arn = var.node_role_arn
    subnet_ids = var.subnet_ids

    scaling_config {
        desired_size = 2
        max_size = 3
        min_size = 1
    }

    instance_types = ["t3.medium"]

    depends_on = [
        var.node_role_arn
    ]

}