resource "aws_security_group" "job_tracker_eks_cluster_sg" {
    vpc_id = var.vpc_id
    description = "Security group for EKS cluster"

    ingress {
        description = "Allow HTTPS form everywhere"
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
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