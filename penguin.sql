create table public.user (
	id SERIAL primary key,
	username TEXT,
	name TEXT,
	email TEXT,
	phone TEXT,
	birthday date,
	gender boolean
)

create table public.post (
	id SERIAL primary key,
	content TEXT,
	authorId int references public.user(id)
)

create table public.comment (
	id SERIAL primary key,
	content TEXT,
	authorId int references public.user(id),
	postId int references public.post(id)
)