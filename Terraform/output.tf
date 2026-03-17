output "vpc_id" {
    description = "ID of the VPC"
    value = aws_vpc.main.id
}

output "public_subnet_ids" {
    description = "IDs of public subnet"
    value = aws_subnet.job_tracker_public_subnet[*].id
}

output "private_subnet_ids" {
    description = "IDs of private subnet"
    value = aws_subnet.job_tracker_private_subnet[*].id
}

output "internet_gateway_id" {
    description = "ID of internet gateway"
    value = aws_internet_gateway.job_tracker_igw.id
}

output "nat_gateway_id" {
    description = "ID of nat gateway"
    value = aws_nat_gateway.job_tracker_nat.id
}