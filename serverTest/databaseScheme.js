// -- Table: test.user_data

// -- DROP TABLE IF EXISTS test.user_data;

// CREATE TABLE IF NOT EXISTS test.user_data
// (
//     id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
//     name text COLLATE pg_catalog."default",
//     surname text COLLATE pg_catalog."default",
//     patronymic text COLLATE pg_catalog."default",
//     email text COLLATE pg_catalog."default",
//     imj text COLLATE pg_catalog."default",
//     date text COLLATE pg_catalog."default",
//     CONSTRAINT user_data_pkey PRIMARY KEY (id)
// )

// TABLESPACE pg_default;

// ALTER TABLE IF EXISTS test.user_data
//     OWNER to andreyafonin;