----------
-- User --
----------
-- Tables
create table if not exists Member(
    email    varchar(255),
    name     varchar(255),
    password varchar(255),
    primary key (email)
);

-- create table if not exists SpecialRole(
--     roleName varchar(255),
--     primary key (roleName)
-- );


-- create table if not exists roleOfMember(
--     roleName varchar(255),
--     email    varchar(255),
--     primary key (roleName, email),
--     foreign key (email) references Member(email),
--     foreign key (roleName) references SpecialRole(roleName)
-- );

-- create table if not exists clientAndLawyer(
--     client varchar(255),
--     lawyer varchar(255),
--     foreign key (client) references Member(email),
--     foreign key (lawyer) references Member(email)
-- );


-- -- Required data
-- insert into  SpecialRole values
--     ('LegalAdmin'),
--     ('Lawyer'),
--     ('GeneralMember')
--     ('Super')
-- on conflict (roleName) do nothing;


-- ---------------
-- -- LegalCase --
-- ---------------
-- -- Related Entities
-- create table if not exists LegalCase(
--     id       varchar(255),
--     narrator varchar(255),
--     primary key (id),
--     foreign key (narrator) references Member(email)
-- );

-- create table if not exists Essential(
--     id          serial,
--     description text,
--     primary key (id)
-- );

-- create table if not exists Resource(
--     id           serial,
--     resourceType varchar(255),
--     resourcePath varchar(255),
--     primary key (id)
-- );

-- create table if not exists Evidence(
--     id           int,
--     evidenceType varchar(255),
--     description  text,
--     primary key (id)
-- );

-- create table if not exists LegalStatute(
--     id   varchar(255),
--     name varchar(255),
--     primary key (id)
-- );

-- create table if not exists LegalSection(
--     id        varchar(255),
--     title     varchar(255),
--     statuteID varchar(255),
--     substance text,
--     primary key (id),
--     foreign key (statuteID) references LegalStatute(id)
-- );


-- -- Remaining relations
-- create table if not exists caseHasEvidence(
--     caseID     varchar(255),
--     evidenceID int,
--     primary key (caseID, evidenceID),
--     foreign key (caseID)     references LegalCase(id),
--     foreign key (evidenceID) references Evidence(id)
-- );

-- create table if not exists caseHasResource (
--     caseID     varchar(255),
--     resourceID serial,
--     primary key (caseID, resourceID),
--     foreign key (caseID)     references LegalCase(id),
--     foreign key (resourceID) references Resource(id)
-- );

-- create table if not exists caseHasEssential (
--     caseID      varchar(255),
--     essentialID serial,
--     primary key (caseID, essentialID),
--     foreign key (caseID)      references LegalCase(id),
--     foreign key (essentialID) references Essential(id)
-- );

-- create table if not exists sectionHasEssential(
--     sectionID   varchar(255),
--     essentialID serial,
--     primary key (sectionID, essentialID),
--     foreign key (sectionID)   references LegalSection(id),
--     foreign key (essentialID) references Essential(id)
-- );

-- create table if not exists chargedWith(
--     caseID varchar(255),
--     sectionID varchar(255),
--     primary key (caseID, sectionID),
--     foreign key (caseID)    references LegalCase(id),
--     foreign key (sectionID) references LegalSection(id)
-- );


-- -------------------
-- -- System Tables --
-- -------------------
-- create table if not exists MemberSession(
--     email varchar(255),
--     token varchar(100),
--     primary key (token),
--     foreign key (email) references Member(email)
-- );
