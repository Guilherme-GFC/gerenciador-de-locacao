import { Column, Entity, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { CommonData } from "./commonData.entity";
import { Lease } from "./lease.entity";
import { Hour_Available } from "./hour_available.entity";
import { Unavailable_Day } from "./unavailable_day.entity";

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

	@ManyToMany(() => Hour_Available)
	@JoinTable()
	hours: Hour_Available[];

	@ManyToMany(() => Unavailable_Day)
	@JoinTable()
	unavailable_days: Unavailable_Day[];
}
