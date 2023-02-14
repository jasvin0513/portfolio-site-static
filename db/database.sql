CREATE DATABASE website;

CREATE TABLE IF NOT EXISTS public.projects
(
    project_id integer NOT NULL DEFAULT 'nextval('projects_project_id_seq'::regclass)',
    title character varying(255) COLLATE pg_catalog."default",
    blurb character varying(255) COLLATE pg_catalog."default",
    tools text COLLATE pg_catalog."default",
    progress character varying(255) COLLATE pg_catalog."default",
    source character varying(255) COLLATE pg_catalog."default",
    icon character varying(255) COLLATE pg_catalog."default",
    description character varying(500) COLLATE pg_catalog."default",
    CONSTRAINT projects_pkey PRIMARY KEY (project_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.projects
    OWNER to postgres;