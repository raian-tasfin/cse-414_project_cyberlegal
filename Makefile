SHELL := /usr/bin/fish



#############
# Functions #
#############
define with_new_terminal
$(shell gnome-terminal --window -- $(SHELL) -c "$(1); exec $(SHELL)")
endef


###################
# Database Values #
###################
psql_user := ${psql_user}
psql_db := ${psql_db}
psql_password := ${psql_password}




############
# Commands #
############
psql_prefix := PGPASSWORD=$(psql_password)
psql := $(psql_prefix) psql -U $(psql_user)
pg_dump := $(psql_prefix) pg_dump -U $(psql_user)
move := mv
direnv := direnv
source := .
terminal := gnome-terminal --window -- $(SHELL) -c
make := make



##################
# Database Paths #
##################
psql_dir := database
psql_scripts_all := $(wildcard $(psql_dir)/*.sql)
psql_scripts_targets := $(psql_scripts_all:%.sql=%)
psql_dump := $(psql_dir)/dump





###########
# Recipes #
###########
$(psql_scripts_targets): %: %.sql
	$(psql) -d $(psql_db) -f $<

$(psql_dump):
	$(pg_dump) $(psql_db) > $@

database/restore: $(psql_dump)
	$(psql) $(psql_db) < $<

database/recreate: $(psql_dump) database/drop-tables database/restore

frontend/start:
	$(call with_new_terminal, cd frontend && yarn start)


server/start:
	$(call with_new_terminal, cd server && flask run)


start: frontend/start server/start
