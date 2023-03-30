import { Column, Entity, ManyToOne } from "typeorm";
import { CommonData } from "./commonData.entity";
import { User } from "./user.entity";
import { Location } from "./location.entity";
import { Hour_Available } from "./hour_available.entity";

export enum LeaseStatus {
	APPROVED = "aprovado",
	DENIED = "negado",
	ANALYZING = "em análise",
}

@Entity("leases")
export class Lease extends CommonData {
	@Column({ type: "date" })
	data: string;

	@Column({ type: "float" })
	value: number;

	@Column({
		type: "enum",
		enum: LeaseStatus,
		default: LeaseStatus.ANALYZING,
	})
	status: LeaseStatus;

	@ManyToOne(() => Hour_Available, (hour_available) => hour_available.leases)
	hour: string;

	@ManyToOne(() => User, (user) => user.leases)
	user: User;

	@ManyToOne(() => Location, (location) => location.leases)
	location: Location;
}
