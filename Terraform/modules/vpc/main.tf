
resource "aws_vpc" "job_tracker_vpc" {
    cidr_block = "10.0.0.0/16"
    enable_dns_hostnames = true
    enable_dns_support = true

    assign_generated_ipv6_cidr_block = true
    tags = {
        Name = "job-tracker-vpc"
    }
}

resource "aws_internet_gateway" "job_tracker_igw" {
    vpc_id = aws_vpc.job_tracker_vpc.id

    tags = {
        Name = "job-tracker-igw"
    }
}

resource "aws_subnet" "job_tracker_public_subnet" {
    count = length(var.public_subnet_cidr)

    vpc_id = aws_vpc.job_tracker_vpc.id
    cidr_block = var.public_subnet_cidr[count.index]
    availability_zone = var.availability_zones[count.index]
    map_public_ip_on_launch = true

    tags = {
        Name = "job-tracker-public-subnet-${count.index}"
    }
}

resource "aws_subnet" "job_tracker_private_subnet" {
    count = length(var.private_subnet_cidr)

    vpc_id = aws_vpc.job_tracker_vpc.id
    cidr_block = var.private_subnet_cidr[count.index]
    availability_zone = var.availability_zones[count.index]

    tags = {
        Name = "job-tracker-private-subnet-${count.index}"
    }
}

resource "aws_eip" "nat_eip" {
    domain = "vpc"
}

resource "aws_nat_gateway" "job_tracker_nat" {
    allocation_id = aws_eip.nat_eip.id
    subnet_id = aws_subnet.job_tracker_public_subnet.id

    tags = {
        Name = "job-tracker-nat-gateway"
    }
}

resource "aws_route_table" "job_tracker_public_rt" {
    vpc_id = aws_vpc.job_tracker_vpc.id

    route = {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.job_tracker_igw.id
    }
    tags = {
        Name = "job-tracker-public-route-table"
    }
}

resource "aws_route_table_association" "public_assoc" {
    count = length(var.public_subnet_cidr)

    subnet_id = aws_subnet.job_tracker_public_subnet[count.index].id
    route_table_id = aws_route_table.job_tracker_public_rt.id
}

resource "aws_route_table" "job_tracker_private_rt" {
    vpc_id = aws_vpc.job_tracker_vpc.id

    route = {
        cidr_block = "0.0.0.0/0"
        nat_gateway_id = aws_nat_gateway.job_tracker_nat.id
    }

    tags = {
        Name = "job-tracker-private-rt"
    }
}

resource "aws_route_table_association" "private_assoc" {
    count = length(var.private_subnet_cidr)
    
    subnet_id = aws_subnet.job_tracker_private_subnet[count.index].id
    route_table_id = aws_route_table.job_tracker_private_rt.id
}