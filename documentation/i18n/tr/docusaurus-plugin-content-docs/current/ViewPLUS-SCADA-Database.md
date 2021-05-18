---
title: ViewPLUS SCADA Database
---

### Database Tables

ViewPLUS SCADA uses various database tables for handling SCADA Project, logging and reporting.

For PostgreSQL The tables are seperated by "public" and "logs" schemas. The public schema consists of project channels, tags, users related tables. The "logs" schema consists of logs and statistical log tables.

<center>

![ViewPLUS-SCADA-Database-01](/img/ViewPLUS-SCADA-Database-01.png)

</center>

alarms : This table contains alarm definitions created by SCADA editor

channels : Channel definitions contains connection information to the field devices

tags : These are the the tag definitions used to define the tag details in the system

users: Table of authorised users list for the project

<center>

![ViewPLUS-SCADA-Database-02](/img/ViewPLUS-SCADA-Database-02.png)

</center>

aalm_table : This table contains the real time active alarms information of the system

alarm_log : Contains historical alarm information

event_log : It contains event information like user login, user requests etc.

lcd_table : This is the latest change time table containing the latest read values of the system tags from the field devices.

tag_log : All the raw data gathered from the field is recorded into tag_log table. This table can increase very rapidly in size.

tag_log_agrhour : The hourly statistical table of system tags. The statistics are calculated using tag_log table. The table is updated once a minute.

tag_log_agrday : The daily statistical table of system tags. The statistics are calculated using tag_log_agrhour table. The table is updated once a minute.

tag_log_agrweek : The daily statistical table of system tags. The statistics are calculated using tag_log_agrday table. The table is updated once a minute.

tag_log_agrmonth : The daily statistical table of system tags. The statistics are calculated using tag_log_agrday table. The table is updated once a minute.

tag_log_agryear : The daily statistical table of system tags. The statistics are calculated using tag_log_agryear table. The table is updated once a minute.