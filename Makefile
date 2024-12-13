SHELL := /usr/bin/fish



#############
# Functions #
#############
define with_new_terminal
$(shell gnome-terminal --window -- $(SHELL) -c "$(1); exec $(SHELL)")
endef



###########
# Recipes #
###########
frontend/start:
	$(call with_new_terminal, cd frontend && yarn start)
