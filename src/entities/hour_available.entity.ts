import { Column, Entity, OneToMany } from "typeorm";
import { CommonData } from "./commonData.entity";
import { Lease } from "./lease.entity";

@Entity("hours_available")
export class Hour_Available extends CommonData {
	@Column({ type: "time" })
	hour: string;

	@OneToMany(() => Lease, (lease) => lease.hour)
	leases: Lease[];
}
