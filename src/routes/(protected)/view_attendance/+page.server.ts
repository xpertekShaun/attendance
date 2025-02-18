import { redirect, type LoadEvent } from '@sveltejs/kit'
import type { PageServerLoad, RequestEvent } from './$types'
import { db } from '$lib/database'


export const load: PageServerLoad = async ({ locals, fetch }:LoadEvent) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}
	//db.fetch
	const attendance = await db.attendance.findMany({
		select: { student_number: true, createdAt: true },
	})

	for (const result in attendance) {
		//result.name = await db.users.findFirst({ select: { name: true }, where: x => x.id === result.id })
		let { fname, surname } = await fetch(`/api/getUser/${attendance[result].student_number}`).then(x => x.json())
		attendance[result].name = `${fname} ${surname}`
	}


	return { attendance: Object.values(attendance) }
}




