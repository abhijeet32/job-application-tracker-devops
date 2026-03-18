resource "aws_security_group" "job_tracker_eks_cluster_sg" {
    vpc_id = var.vpc_id
    description = "Security group for EKS cluster"

    ingress = {
        description = "Allow HTTPS form everywhere"
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress = {
        description = "Allow all outbound trafic"
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    tags = {
        Name = "job-tracker-eks-cluster-sg"
    }
}

resource "aws_security_group" "job_tracker_node_group_sg" {
    vpc_id = var.vpc_id
    description = "Security group for worker nodes"

    ingress = {
        description = "Allow node-to-node communication"
        from_port = 0
        to_port = 0
        protocol = "-1"
        self = true

    ingress = {
        description = "Allow cluster to communicate with nodes"
        from_port = 1025
        to_port = 65535
        protocol = "tcp"
        security_groups = [aws_security_group.job_tracker_eks_cluster_sg.id]
    }


    egress = {
        description = "Allow all outbound"
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    tags = {
        Name = "job-tracker-node-sg"
    }
}
}