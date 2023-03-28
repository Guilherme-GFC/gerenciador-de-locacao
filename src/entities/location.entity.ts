import { Column, Entity, OneToMany } from "typeorm";
import { CommonData } from "./commonData.entity";
import { Lease } from "./lease.entity";

@Entity("locations")
export class Location extends CommonData {
	@Column({ length: 27 })
	name: string;

	@Column({ length: 47 })
	address: string;

	@Column({ length: 5, nullable: true })
	number: string;

	@OneToMany(() => Lease, (lease) => lease.location)
	leases: Lease[];
}
