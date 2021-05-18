---
title: AT Commands
---

Mikrodev Devices have MODBUS registers which you could set some special parameters. You can find these special registers in the following table. Please note that the values you set via MODBUS will be saved into retentive memory once every 5 minutes for security purposes. After setting the parameter via MODBUS, if you power off the device earlier than 5 minutes, the changes may be lost.

|		|	AT+XXX=?	|	ACCESS RIGHT	|	DESCRIPTION	|				
| ------ | ------ | ------ | ------ |
|	ETHERNET	|	LOCALIP	|	LOGIN REQUIRED, R/W	|		|																	
|		|	MAC	|	LOGIN REQUIRED, R/W	|		|																	
|		|	GATEWAY	|	LOGIN REQUIRED, R/W	|		|																	
|		|	NETMASK	|	LOGIN REQUIRED, R/W	|	 	|																	
|		|	DHCP	|	LOGIN REQUIRED, R/W	|	Enable/Disable DHCP	|																	
|		|	LWIPTMO	|	LOGIN REQUIRED, R/W	|	If no packets received from PLC Ethernet port, resets the ethernet connection	|																	
|		|	CONFIGPORT	|	LOGIN REQUIRED, R/W	|	 	|																	
|	 	|		|		|	 	|																	
|	GSM	|	GPRSAPN	|	LOGIN REQUIRED, R/W	|		|																	
|		|	GPRSNAME	|	LOGIN REQUIRED, R/W	|		|																	
|		|	GPRSPSSW	|	LOGIN REQUIRED, R/W	|		|																	
|		|	CSQ	|	READ ONLY	|	 available if ppp is not active	|																	
|		|	IMEI	|	READ ONLY	|	 available if ppp is not active	|																	
|		|	GPRSIP	|	READ ONLY	|	 available if ppp is not active	|																	
|		|	SIM	|	READ ONLY	|	 available if ppp is not active, returns true if SIMCARD communication is ok	|																	
|		|	MODEM	|	UNPROTECTED, READ ONLY	|	 available if ppp is not active, sends and receives reply from modem	|																	
|	 	|		|		|		|																	
|	SOCKET STATUS	|	SERVERTIMEOUT	|	LOGIN REQUIRED, R/W	|	Tests if sockets are ok, if not closes them (seconds)	|																	
|	 	|	CONNECTION	|	READ ONLY	|	 	|																	
|		|	SOCKET	|	UNPROTECTED, READ ONLY	|	Displays the details of the clients connected on that "socket number"	|																	
|		|	PLCRESET	|	LOGIN REQUIRED, R/W	|	If not received any data during that interval from ,GSM/ETH resets the device	|																	
|		|		|		|	 	|																																	
|	PLC STATUS	|	HELP	|	READ ONLY	|	 	|																	
|		|	INCLUDE	|	READ ONLY	|	Shows the enabled features on the device	|																	
|		|	MEMORY	|	READ ONLY	|	Total used memory	|																	
|		|	VERSION	|	READ ONLY	|	 	|																	
|		|	SERIALNO	|	READ ONLY	|	 	|																	
|		|	PRODUCTNO	|	READ ONLY	|	Returns the product number	|																	
|		|	MODEL	|	READ ONLY	|	Device model selected in bootloader level	|																	
|		|	POWERCOUNT	|	READ ONLY	|	Total reset count from the time project is uploaded	|																	
|		|	ERROR	|	READ ONLY	|	 	|																	
|		|		|		|	 	|																																	
|	PLC TIME	|	SETTIME	|	LOGIN REQUIRED, R/W	|	 	|																	
|		|	TIMEOFFSET	|	LOGIN REQUIRED, R/W	|	Time zone offset	|																	
|		|		|		|	 	|																																		
|	PLC LCD	|	MENULINE1	|	LOGIN REQUIRED, R/W	|	Startup text for LCD devices, 16 characters ,first line 	|																	
|		|	MENULINE2	|	LOGIN REQUIRED, R/W	|	Startup text for LCD devices, 16 characters ,second line	|																	
|		|		|		|	 	|																																	
|	WI-FI SETTINGS	|	WIFIPSSW	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi Password	|																	
|		|	WIFISSID	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi SSID	|																	
|		|	WIFIMAC	|	LOGIN REQUIRED, R/W	|	Get WiFi MAC	|																	
|		|	WIFIIP	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi IP Address	|																	
|		|	WIFIGATEWAY	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi Gateway Address	|																	
|		|	WIFINETMASK	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi Network Mask	|																	
|		|		|		|	 	|																																	
|	CANBUS	|	CANSTATUS	|	UNPROTECTED, READ ONLY	|	Status information for extension devices	|																	
|		|	CANCOMMAND	|	LOGIN REQUIRED, R/W	|	Sends commands to extension devices	|																	
|		|	CANTIMEOUT	|	LOGIN REQUIRED, R/W	|	Timeout value for checking extension device exists or not	|																	
|	 	|		|		|		|																	
|	INTERNAL FILESYSTEM RELATED	|	FBD	|	UNPROTECTED, R/W	|	 	|																	
|		|	ONLINE	|	UNPROTECTED, R/W	|	 	|																	
|		|	DEFAULT	|	LOGIN REQUIRED, R/W	|	 	|																	
|		|	PASSWORD	|	UNPROTECTED, R/W	|	Set Password	|																	
|		|	LOGIN	|	UNPROTECTED, READ ONLY	|	Login device	|																	
|		|	RESET	|	UNPROTECTED, R/W	|	 	|																	
|		|		|		|	 	|																																		
|	OTHER PLC FUNCTIONS	|	ADCERROR	|	READ ONLY	|	ADC error count	|																	
|		|	FORMATFS	|	LOGIN REQUIRED, R/W	|	Format filesystem	|																	
|		|	FATFS	|	READ ONLY	|	The size of the log file in the SD card	|																	
