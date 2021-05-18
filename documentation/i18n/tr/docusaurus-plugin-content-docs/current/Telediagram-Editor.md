---
title: Telediagram Editor
---

## Using IEC 104

IEC 60870-5-104  is a protocol for power system monitoring and controlling. Mostly used to communicate between substations and control centers over Ethernet (Fiber optics, 2/3/4G, ...). IEC 60870-5-104 protocol is an extension of IEC 60870-5-101 protocol with the changes in transport, network, link and physical layer services to suit the complete network access.

Here you will find basic information about protocol parameters:

* APCI - Application Protocol Control Information
* APDU - Application Protocol Data Unit
* ASDU - Application Service Data Unit

### Address

* IP address - every device in Ethernet have physical address
* ASDU address - every slave (client) device has a logical address, also one device could have more than one ASDU address
* IOA  address - information object address

|	Dec	|	Type	|	Description	|	Direction	|		Direction	|	Support	|		
| ------ | ------ | ------ | ------ |
|	1	|	M_SP_NA_1	|	Single-point information		|	Monitor	|	Yes	|
|	2	|	M_SP_TA_1	|	Single-point information with time tag		|	Monitor	|	Yes	|
|	3	|	M_DP_NA_1	|	Double-point information		|	Monitor	|	Yes	|
|	4	|	M_DP_TA_1	|	Double-point information with time tag		|	Monitor	|	Yes	|
|	5	|	M_ST_NA_1	|	Step position information		|	Monitor	|	No	|
|	6	|	M_ST_TA_1	|	Step position information with time tag		|	Monitor	|	No	|
|	7	|	M_BO_NA_1	|	Bit string of 32 bit		|	Monitor	|	No	|
|	8	|	M_BO_TA_1	|	Bit string of 32 bit with time tag		|	Monitor	|	No	|
|	9	|	M_ME_NA_1	|	Measured value, normalized value		|	Monitor	|	Yes	|
|	10	|	M_ME_TA_1	|	Measured value, normalized value with time tag		|	Monitor	|	Yes	|
|	11	|	M_ME_NB_1	|	Measured value, scaled value		|	Monitor	|	Yes	|
|	12	|	M_ME_TB_1	|	Measured value, scaled value wit time tag		|	Monitor	|	Yes	|
|	13	|	M_ME_NC_1	|	Measured value, short floating point number		|	Monitor	|	Yes	|
|	14	|	M_ME_TC_1	|	Measured value, short floating point number with time tag		|	Monitor	|	Yes	|
|	15	|	M_IT_NA_1	|	Integrated totals		|	Monitor	|	No	|
|	16	|	M_IT_TA_1	|	Integrated totals with time tag		|	Monitor	|	No	|
|	17	|	M_EP_TA_1	|	Event of protection equipment with time tag      		|	Monitor	|	No	|
|	18	|	M_EP_TB_1	|	Packed start events of protection equipment with time tag		|	Monitor	|	No	|
|	19	|	M_EP_TC_1	|	Packed output circuit information of protection equipment with time tag		|	Monitor	|	No	|
|	20	|	M_PS_NA_1	|	Packed single point information with status change detection		|	Monitor	|	No	|
|	21	|	M_ME_ND_1	|	Measured value, normalized value without quality descriptor		|	Monitor	|	No	|
|	30	|	M_SP_TB_1	|	Single-point information with time tag CP56Time2a		|	Monitor	|	Yes	|
|	31	|	M_DP_TB_1	|	Double-point information with time tag CP56Time2a		|	Monitor	|	Yes	|
|	32	|	M_ST_TB_1	|	Step position information with time tag CP56Time2a		|	Monitor	|	Yes	|
|	33	|	M_BO_TB_1	|	Bit string of 32 bit with time tag CP56Time2a		|	Monitor	|	No	|
|	34	|	M_ME_TD_1	|	Measured value, normalized value with time tag CP56Time2a		|	Monitor	|	Yes	|
|	35	|	M_ME_TE_1	|	Measured value, scaled value with time tag CP56Time2a		|	Monitor	|	Yes	|
|	36	|	M_ME_TF_1	|	Measured value, short floating point number with time tag CP56Time2a		|	Monitor	|	Yes	|
|	37	|	M_IT_TB_1	|	Integrated totals with time tag CP56Time2a		|	Monitor	|	No	|
|	38	|	M_EP_TD_1	|	Event of protection equipment with time tag CP56Time2a		|	Monitor	|	No	|
|	39	|	M_EP_TE_1	|	Packed start events of protection equipment with time tag CP56Time2a		|	Monitor	|	No	|
|	40	|	M_EP_TF_1	|	Packed output circuit information of protection equipment with time tag CP56Time2a		|	Monitor	|	No	|
|	45	|	C_SC_NA_1	|	Single command		|	Control	|	Yes	|
|	46	|	C_DC_NA_1	|	Double command		|	Control	|	Yes	|
|	47	|	C_RC_NA_1	|	Regulating step command		|	Control	|	No	|
|	48	|	C_SE_NA_1	|	Set-point Command, normalized value		|	Control	|	Yes	|
|	49	|	C_SE_NB_1	|	Set-point Command, scaled value		|	Control	|	Yes	|
|	50	|	C_SE_NC_1	|	Set-point Command, short floating point number		|	Control	|	Yes	|
|	51	|	C_BO_NA_1	|	Bit string 32 bit command		|	Control	|	No	|
|	58	|	C_SC_TA_1	|	Single command with time tag CP56Time2a		|	Control	|	Yes	|
|	59	|	C_DC_TA_1	|	Double command with time tag CP56Time2a		|	Control	|	Yes	|
|	60	|	C_RC_TA_1	|	Regulating step command with time tag CP56Time2a		|	Control	|	No	|
|	61	|	C_SE_TA_1	|	Measured value, normalized value command with time tag CP56Time2a		|	Control	|	Yes	|
|	62	|	C_SE_TB_1	|	Measured value, scaled value command with time tag CP56Time2a		|	Control	|	Yes	|
|	63	|	C_SE_TC_1	|	Measured value, short floating point number command with time tag CP56Time2a		|	Control	|	Yes	|
|	64	|	C_BO_TA_1	|	Bit string of 32 bit command with time tag CP56Time2a		|	Control	|	No	|
|	70	|	M_EI_NA_1	|	End of Initialization	|	Monitor	|	Yes	|
|	100	|	C_IC_NA_1	|	Interrogation command	|	Control	|	Yes	|
|	101	|	C_CI_NA_1	|	Counter interrogation command	|	Control	|	No	|
|	102	|	C_RD_NA_1	|	Read command	|	Control	|	Yes	|
|	103	|	C_CS_NA_1	|	Clock synchronization command	|	Control	|	Yes	|
|	104	|	C_TS_NA_1	|	Test command	|	Control	|	No	|
|	105	|	C_RP_NA_1	|	Reset process command	|	Control	|	No	|
|	106	|	C_CD_NA_1	|	Delay acquisition command	|	Control	|	No	|
|	107	|	C_TS_TA_1	|	Test command with time tag CP56Time2a	|	Control	|	No	|
|	110	|	P_ME_NA_1	|	Parameter of measured values, normalized value		Control	|	No	|
|	111	|	P_ME_NB_1	|	Parameter of measured values, scaled value		Control	|	No	|
|	112	|	P_ME_NC_1	|	Parameter of measured values, short floating point number		Control	|	No	|
|	113	|	P_AC_NA_1	|	Parameter activation		Control	|	No	|
|	120	|	F_FR_NA_1	|	File ready	|	File transfer	|	No	|
|	121	|	F_SR_NA_1	|	Section ready	|	File transfer	|	No	|
|	122	|	F_SC_NA_1	|	Call directory, select file, call file, call section	|	File transfer	|	No	|
|	123	|	F_LS_NA_1	|	Last section, last segment	|	File transfer	|	No	|
|	124	|	F_FA_NA_1	|	ACK file, ACK section	|	File transfer	|	No	|
|	125	|	F_SG_NA_1	|	Segment	|	File transfer	|	No	|
|	126	|	F_DR_TA_1	|	Directory	|	File transfer	|	No	|
|	127	|	F_SC_NB_1	|	Request archive file	|	File transfer	|	No	|

* Cause of transmission

|	Dec	|	Description	|
| ------ | ------ |
|	1	|	Periodic, cyclic	|
|	2	|	Background interrogation	|
|	3	|	Spontaneous	|
|	4	|	Initialized	|
|	5	|	Interrogation or interrogated	|
|	6	|	Activation	|
|	7	|	Confirmation activation	|
|	8	|	Deactivation	|
|	9	|	Confirmation deactivation	|
|	10	|	Termination activation	|
|	11	|	Return information caused by a remote command	|
|	12	|	Return information caused by a local command	|
|	13	|	File transfer	|
|	20	|	Interrogated by general interrogation	|
|	21	|	Interrogated by interrogation group 1	|
|	22	|	Interrogated by interrogation group 2	|
|	23	|	Interrogated by interrogation group 3	|
|	24	|	Interrogated by interrogation group 4	|
|	25	|	Interrogated by interrogation group 5	|
|	26	|	Interrogated by interrogation group 6	|
|	27	|	Interrogated by interrogation group 7	|
|	28	|	Interrogated by interrogation group 8	|
|	29	|	Interrogated by interrogation group 9	|
|	30	|	Interrogated by interrogation group 10	|
|	31	|	Interrogated by interrogation group 11	|
|	32	|	Interrogated by interrogation group 12	|
|	33	|	Interrogated by interrogation group 13	|
|	34	|	Interrogated by interrogation group 14	|
|	35	|	Interrogated by interrogation group 15	|
|	36	|	Interrogated by interrogation group 16	|
|	37	|	Interrogated by counter general interrogation	|
|	38	|	Interrogated by interrogation counter group 1	|
|	39	|	Interrogated by interrogation counter group 2	|
|	40	|	Interrogated by interrogation counter group 3	|
|	41	|	Interrogated by interrogation counter group 4	|
|	44	|	Type Identification unknown	|
|	45	|	Cause unknown	|
|	46	|	ASDU address unknown	|
|	47	|	Information object address unknown	|

### Block Information

* By adding IEC104 slave block , IEC 104 will be activated on the RTU.
* TCP or Serialport block is connected to IEC104 block ser input.
* IEC 104 blocks must be added for each server to serve multiple servers.
* Asd input is used if IEC104 Asdu address is set from outside but not inside block.
* On the rising edge of the trigger, periodic transmission between IEC104 objects is activated and the selected objects are transmitted to the server periodically. Trigger input can be left blank.

<center>

![telediagram-editor-01](/img/telediagram-editor-01.png)

</center>

Ser: TCP Socket Input. The TCP server socket block from which the IEC104 protocol will work is connected from this input

Trg: Trigger Input Trigger input for periodic sending. It works as a rising edge.

Asd: Asdu Address Input The ASDU address is used as input.

Q1: Link Status If the IEC104 connection between SCADA and RTU is installed, this output value is 1, otherwise 0.

Q2: SCADA write status, If SCADA requests select and execute, a pulse is generated at this output.

### Custom Settings

* AsduAddress: IEC104 slave station ASDU address is defined

<center>

![telediagram-editor-02](/img/telediagram-editor-02.png)

</center>

AsduAddress: IEC104 slave station ASDU address is defined

T0: Timeout for the establishment of the connection with the server. (Not used Slave)

T1: This parameter defines the time in seconds that slave waits maximum for an acknowledge from the master.

T2: Timeout period for Ack (A S-format frame  will be sent at the latest after this time starting from the last received telegram from the master)

T3: Test frame sending time (A Test frame will be sent at the latest after this time starting from the last received telegram from the master)

K: The maximum allowable difference between the sequence number in the received packet and the number in the send status variable.

W: ACK(acknowledge message) sending frequency(sends ACK after W packets)

### Sample Application

* In RTU logic projects , with the addition of IEC 104 Slave Block, the IEC 104 protocol is activated in the RTU. Variables in the RTU logic project, IEC104 association is provided in the variable address table.

<center>

![telediagram-editor-03](/img/telediagram-editor-03.png)

</center>

### Variable Mapping with Protocol

#### Variable Address Table

* The relevant protocol is activated in the RTU logic project by adding the protocol block. Variables in the RTU logic Project, association between protocol.is provided in te variable address table

<center>

![telediagram-editor-04](/img/telediagram-editor-04.png)

</center>

#### Defining Line Labels

*Line label can be defined for all blocks defined on the Mikrodiagram. In the variable table, the line label must be defined in order to be able to associate with the protocol addresses.

<center>

![telediagram-editor-05](/img/telediagram-editor-05.png)

</center>

#### Attaching a Line Label

<center>

![telediagram-editor-06](/img/telediagram-editor-06.png)

</center>

Alias: A special name is given that defines this defined variable.

Start Address:The address allocated for this variable on SCADA is written here. It is written as a decimal value

Line Label:The block to be associated on the Mikrodiagram is selected with the line label.

Point Count:Calculated automatically. It makes sense on tables.

Protocol Type:Modbus, Dnp3, IEC101, IEC104 are selected. Object type will change according to protocol type.

Object Type:IEC104 object type information selected. look the protocol type information for detailed information.

Object Class:The class information to which the variable belongs is selected.

Send On Trigger:IEC104 Slave block is the selection to send to this SCADA as a periodic send when the test is detected from the trigger input.

####  Send Method:
If the value of the defined variable is changed, the operation to be performed is selected.

Level: When the quantity defined in "Change Value" is changed, the transmission is triggered.

Percentage: The transmission is triggered when there is a change in the percentage defined in "Change Value".

None: Value exchange does not trigger posting

Change Value: With the "Send method", it adjusts the percentage change in the level.

## Telediagram License

### Installing the License File

To get a valid license please send your "hardware id" to sales@mikrodev.com.

To find out your hardware id; after you download and install Telediagram application, go to the "bin" directory of the application and run "license_user.exe" .

Before running "license_user.exe" make sure that no "usb stick" or "external harddrive" is connected on your computer since that may change your hardware ID.

<center>

![telediagram-editor-07](/img/telediagram-editor-07.png)

</center>

After you receive a valid "tlicense.dat" file, copy this file into the "bin" directory of Telediagram application

The licence will automatically be loaded when you restart the Editor


























































