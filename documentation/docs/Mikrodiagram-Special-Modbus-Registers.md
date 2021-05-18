---
title: Special Modbus Registers
---

Mikrodev Devices have MODBUS registers which you could set some special parameters. You can find these special registers in the following table. Please note that the values you set via MODBUS will be saved into retentive memory once every 5 minutes for security purposes. After setting the parameter via MODBUS, if you power off the device earlier than 5 minutes, the changes may be lost.

|	SHORT NAME	|	EXPLANATIONS	|	MODBUS ADRESS	|	TYPE	|	SIZE	|
| ------ | ------ | ------ | ------ | ------ |
|	ConfigPort;	|	Mikrodiagram Connection TCP Port	|	0	|	u16_t	|	1	|
|	ConnectionTrack;	|	Server Timeout, Track the up sockets is alive or not	|	1	|	u16_t	|	1	|
|	ConfigPlcReset;	|	Reset the PLC when the defined seconds if there is no sokect activity over ETH or GSM	|	2	|	u16_t	|	1	|
|	ConfigAinVoltage;	|	NA	|	3	|	u16_t	|	1	|
|	ConfigTempType;	|	NA	|	4	|	u16_t	|	1	|
|	ConfigPto;	|	Configuration of Pulse Train Output Functionality. 1- Enable, 0- Disable	|	5	|	u16_t	|	1	|
|	ConfigDhcp;	|	Configuration of DHCP. 1- Enable, 0- Disable	|	6	|	u16_t	|	1	|
|	ConfigCanSpeed;	|	Configuration of CAN Extension Bus Spees. 0- 500 Kbit, 1- 250 Kbit, 2- 100 Kbit, 3- 1000 Kbit	|	7	|	u16_t	|	1	|
|	ConfigCanTmo;	|	Timeout value for CAN extensions, milisecond	|	8	|	u16_t	|	1	|
|	ConfigTimeZone;	|	Time zone,	|	9	|	s16_t	|	1	|
|	ConfigGsmReset;	|	Power Reset the integrated GSM if there is no GSM activity after defined seconds( After firmware version 15.08. Before 15.08 this value is fixed to 480 seconds)	|	10	|	u16_t	|	1	|
|	ProductSubCode;	|	Product Familiy code	|	11	|	u16_t	|	1	|
|	BoardPcbVersion;	|	PCB version number	|	12	|	u8_t	|	1	|
|	VersionHighByte;	|	Firmware Version Number, High Byte	|	 	|	u8_t	|	0	|
|	VersionLowByte;	|	Firmware Version Number, High Low	|	13	|	u8_t	|	1	|
|	ErrorCode;	|	PLC Error State	|	 	|	u8_t	|	0	|
|	CsqLevel;	|	GSM CSQ Level	|	14	|	u16_t	|	1	|
|	LwipTmo;	|	Resets the integrated ETH Phy if there is no ETH activity after defined seconds AND resets the GSM Modem if the PPP(Point to Point) connection has no activity after defined seconds.	|	15	|	u16_t	|	1	|
|	Mac;	|	MAC adress of ETH units	|	16	|	u32_t	|	2	|
|	SerialNo;	|	Serial number of the PLC	|	18	|	u32_t	|	2	|
|	LocalIp;	|	Local IP adress of the PLC over ETHERNET	|	20	|	u32_t	|	2	|
|	Netmask;	|	Subnet Mask of the PLC over ETHERNET	|	22	|	u32_t	|	2	|
|	Gateway;	|	Gateway adress of the PLC over ETHERNET	|	24	|	u32_t	|	2	|
|	PowerResetCount;	|	Keep to number of power reset counter of the device. 	|	26	|	u32_t	|	2	|
|	AppPlcTime;	|	PLC Current Dat/Time	|	28	|	u32_t	|	2	|
|	AppPlcRam;	|	PLC Current RAM Usage	|	30	|	u32_t	|	2	|
|	AppPlcSecret;	|	PLC Security Info	|	32	|	u32_t	|	2	|
|	ScheduleItemList[64];	|	This is used with, ViewPLUS SCADA to control scheduling items	|	34	|	u32_t	|	128	|
|	GprsName[32];	|	GSM APN Username - must be terminated with NULL char	|	162	|	char	|	16	|
|	GprsPssw[32];	|	GSM APN Password  - must be terminated with NULL char	|	178	|	char	|	16	|
|	GprsPin[8];	|	GSM PIN - Not Used Now	|	194	|	char	|	4	|
|	GprsApn[64];	|	GSM APN Name  - must be terminated with NULL char	|	198	|	char	|	32	|
|	MenuFbdAddress;	|	Which of the blok values want to be seen on LCD display	|	214	|	u32_t	|	2	|
|	MenuLine1[24];	|	LCD raw 1 text  - must be terminated with NULL char	|	216	|	char	|	12	|
|	MenuLine2[24];	|	LCD raw 2 text  - must be terminated with NULL char	|	228	|	char	|	12	|
|	E_MODCAN_DO16;	|		|	16000 + 0x000	|		|		|
|	E_MODCAN_RL16;	|		|	16000 + 0x080	|		|		|
|	E_MODCAN_AQ2;	|		|	16000 + 0x180	|		|		|
|	E_MODCAN_DI16;	|		|	16000 + 0x200	|		|		|
|	E_MODCAN_AI2;	|		|	16000 + 0x280	|		|		|
|	E_MODCAN_RTD2;	|		|	16000 + 0x300	|		|		|
|	E_MODCAN_DI8DQ8;	|		|	16000 + 0x380	|		|		|
|	E_MODCAN_AI4AQ4;	|		|	16000 + 0x400	|		|		|
|	E_MODCAN_DI8;	|		|	16000 + 0x480	|		|		|
|	E_MODCAN_DQ8;	|		|	16000 + 0x500	|		|		|
|	E_MODCAN_AI4;	|		|	16000 + 0x580	|		|		|
|	E_MODCAN_AQ4;	|		|	16000 + 0x600	|		|		|
|	E_MODCAN_T8;	|		|	16000 + 0x680	|		|		|
|	E_MODCAN_LC2;	|		|	16000 + 0x700	|		|		|
|	E_MODCAN_T4;	|		|	16000 + 0x780	|		|		|
|	E_MODCAN_STATUS_TMO;	|		|	19000	|		|		|
|	E_MODCAN_STATUS_TX;	|		|	19002	|		|		|
|	E_MODCAN_STATUS_RX;	|		|	19004	|		|		|
