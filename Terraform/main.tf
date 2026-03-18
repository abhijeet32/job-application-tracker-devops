module "vpc" {
    source = "./modules/vpc"

    vpc_cidr = var.vpc_cidr

    public_subnet_cidr = var.public_subnet_cidr
    private_subnet_cidr = var.private_subnet_cidr

    availability_zones = var.availability_zones
}

module "iam" {
    source = "./modules/iam"

    cluster_role_name = "job_tracker_eks_cluster_role"
    node_role_name = "job-tracker-worker-node-role"
}

module "security_groups" {
    source = "./modules/security-groups"

    vpc_id = module.vpc.vpc_id
}

module "eks" {
    source = "./modules/eks"

    cluster_name = "job-tracker-eks"
    cluster_role_arn = module.iam.cluster_role_arn
    subnet_ids = module.vpc.private_subnet_ids
    cluster_sg_ids = module.security_groups.job_tracker_eks_cluster_sg_id
}

module "node-group" {
    source = "./modules/node-group"

    cluster_name = module.eks.cluster_name
    node_role_arn = module.iam.node_role_arn
    subnet_ids = module.vpc.private_subnet_ids
}