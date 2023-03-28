import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from "typeorm";
import { CommonData } from "./commonData.entity";
import { Lease } from "./lease.entity";

@Entity("users")
export class User extends CommonData {
	@Column({ length: 47 })
	name: string;

	@Column({ length: 47, unique: true })
	email: string;

	@Column({ length: 120 })
	password: string;

	@Column({ default: false })
	isAdm: boolean;

	@OneToMany(() => Lease, (lease) => lease.user)
	leases: Lease[];

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 7);
		}
	}
}
