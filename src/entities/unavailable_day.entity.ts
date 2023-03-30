import { Column, Entity } from "typeorm";
import { CommonData } from "./commonData.entity";

@Entity("unavailable_days")
export class Unavailable_Day extends CommonData {
	@Column({ type: "date" })
	date: string;
}
