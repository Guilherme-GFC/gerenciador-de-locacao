import { Column, Entity, ManyToOne } from "typeorm";
import { CommonData } from "./commonData.entity";
import { User } from "./user.entity";
import { Location } from "./location.entity";

export enum LeaseStatus {
	APPROVED = "aprovado",
	DENIED = "negado",
	ANALYZING = "em análise",
}

@Entity("leases")
export class Lease extends CommonData {
	@Column({ type: "date" })
	data: string;

	@Column({ type: "time" })
	hour: string;

	@Column({ type: "float" })
	value: number;

	@Column({
		type: "enum",
		enum: LeaseStatus,
		default: LeaseStatus.ANALYZING,
	})
	status: LeaseStatus;

	@ManyToOne(() => User, (user) => user.leases)
	user: User;

	@ManyToOne(() => Location, (location) => location.leases)
	location: User;
}
