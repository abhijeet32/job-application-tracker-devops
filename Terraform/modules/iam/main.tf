resource "aws_iam_role" "job_tracker_eks_cluster_role" {
    name = var.cluster_role_name

    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
            {
                Effect = "Allow"
                Principal = {
                    Service = "eks.amazonaws.com"
                }
                Action = "sts:AssumeRole"
            }
        ]
    })
}

resource "aws_iam_role_policy_attachment" "job_tracker_eks_cluster_AmazonEKSClusterPolicy" {
    role = aws_iam_role.job_tracker_eks_cluster_role.name
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}

resource "aws_iam_role" "job_tracker_node_role" {
    name = var.node_role_name

    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
            {
                Effect = "Allow"
                Principal = {
                    Service = "ec2.amazonaws.com"
                }
                Action = "sts:AssumeRole"
            }
        ]
    })
}

resource "aws_iam_role_policy_attachment" "AmazonEKSWorkerNodePolicy" {
    role = aws_iam_role.job_tracker_node_role.name
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
}

resource "aws_iam_role_policy_attachment" "AmazonEKS_CNI_Policy" {
    role = aws_iam_role.job_tracker_node_role.name
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
}
