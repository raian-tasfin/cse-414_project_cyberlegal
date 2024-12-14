drop table if exists Member              cascade;
drop table if exists SpecialRole         cascade;
drop table if exists roleOfMember        cascade;
drop table if exists clientAndLawyer     cascade;
drop table if exists LegalCase           cascade;
drop table if exists Essential           cascade;
drop table if exists Resource            cascade;
drop table if exists Evidence            cascade;
drop table if exists LegalStatute        cascade;
drop table if exists LegalSection        cascade;
drop table if exists caseHasEvidence     cascade;
drop table if exists caseHasResource     cascade;
drop table if exists caseHasEssential    cascade;
drop table if exists sectionHasEssential cascade;
drop table if exists chargedWith         cascade;

-- System tables
drop table if exists MemberSession;
