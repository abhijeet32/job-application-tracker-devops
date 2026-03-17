
resource "aws_vpc" "job_tracker_vpc" {
    cidr_block = "10.0.0.0/16"
    enable_dns_hostnames = true
    enable_dns_support = true

    assign_generated_ipv6_cidr_block = true
    tags = {
        Name = "job-tracker-vpc"
    }
}

resource "aws_subnet" "job_tracker_subnet" {
    count = 2
    vpc_id = aws_vpc.job_tracker_vpc.id
    cidr_block = cidrsubnet(aws_vpc.job_tracker_vpc.cidr_block, 8, count.index)
    availability_zone = element(["us-east-1a", "us-east-1b"], count.index)
    map_public_ip_on_launch = true

    tags = {
        Name = "job-tracker-subnet-${count.index}"
    }
}

resource "aws_internet_gateway" "job_tracker_igw" {
    vpc_id = aws_vpc.job_tracker_vpc.id

    tags = {
        Name = "job-tracker-igw"
    }
}

resource "aws_route_table" "job_tracker_rt" {
    vpc_id = aws_vpc.job_tracker_vpc.id

    route = {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.job_tracker_igw.id
    }
    tags = {
        Name = "job-tracker-route-table"
    }
}