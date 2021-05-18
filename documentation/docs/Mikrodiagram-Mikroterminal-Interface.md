---
title: "Mikroterminal Interface"
---

The mikroterminal program can be accessed from Mikrodiagram Tools menu.

<center>

![mikroterminal-interface-01](/img/mikroterminal-interface-01.png)

</center>

<center>

![mikroterminal-interface-02](/img/mikroterminal-interface-02.png)

</center>

* Opening the USB COM Port

<center>

![mikroterminal-interface-03](/img/mikroterminal-interface-03.png)

</center>

To open the COM port on the mikroterminal, select the port where the connection between the device and the computer is established in the "port name" section. (The connection port between the device and the computer can be controlled from the "device manager".)

When the "Open" tab is clicked, the COM port information displayed in the "console window" is displayed.

* Sending The AT Command

With AT commands, the current settings on the device can be read or the desired values can be written to the device.

<center>

![mikroterminal-interface-04](/img/mikroterminal-interface-04.png)

</center>

Click on the "Read" button to read the current settings on the device. When the "Read" button is clicked, the current value in the device is displayed in the "console window".

<center>

![mikroterminal-interface-05](/img/mikroterminal-interface-05.png)

</center>

In case the current settings of the device are to be changed by AT commands, the value to be changed is written on the window, then the "Write" button is clicked. The value written is displayed in the "console window". If the write operation is successful, the command  “OK" is printed in the console window.

* Custom Command Window

<center>

![mikroterminal-interface-06](/img/mikroterminal-interface-06.png)

</center>

AT commands can also be sent from the custom command input window.

If the current value in the device is to be read, the window "AT + SPECIALTY =?" is written, the "send" button is clicked, the current value is displayed in the console window.

<center>

![mikroterminal-interface-07](/img/mikroterminal-interface-07.png)

</center>

If you want to write a value from the device specific command window, the command "AT + SPECIALTYPE = WRITE KOMUT" is defined and the value written when the "send" button is clicked is displayed in the console window.

If the write operation is successful, the command "SPECIALTY = OK" is printed in the console window.

### List of The AT Command

Some of the AT commands used in Mikrodev products are only readable and some have both readable and writeble capabilities.

The commands on the AT command list differ according to the devices.

The AT commands used in GSM, Ethernet, Wi-Fi enabled products are indicated in the headers (E / G / W).

* AT+FBD

In Mikrodiagram, it is used to read block value and write block value by using "block numbers" of door types.

If the value is to be written, "AT + FBD = BLOKNO, VALUE" is defined and clicked on the "write" command.

If the block value is to be read, "AT + FBD = BLOKNO,?" is defined and clicked on the "write" command.

The "read" command is not used in the AT + FBD command, only the "write" command is used.

Example;

<center>

![mikroterminal-interface-08](/img/mikroterminal-interface-08.png)

</center>

<center>

![mikroterminal-interface-09](/img/mikroterminal-interface-09.png)

</center>

Since the 3000 no of block is a register block, both writing and reading can be done.

When "AT + FBD = 3000,10" is entered and "summer" button is clicked, "10" value  is written on block. Value information written  is displayed as "FBD = OK" in the console window.

<center>

![mikroterminal-interface-10](/img/mikroterminal-interface-10.png)

</center>

If you want to read the block value of no 3000  , "AT + FBD = 3000,?" is written and when the "write" command is clicked, the block value is displayed as "FBD = 10" in the console window.

* AT+LOCALIP(E/W)

Used to identify local IP to devices with Ethernet or Wi-Fi capability

<center>

![mikroterminal-interface-11](/img/mikroterminal-interface-11.png)

</center>

To change the local IP, type "AT + LOCALIP = IP" and click "write" command to write IP to the device.

Click on the "read" command to read the current IP value.

* AT+MAC(E/W)

It is used to define the MAC address for devices with Ethernet or Wi-Fi capability.

Numbers can be defined in hexadecimal.

<center>

![mikroterminal-interface-12](/img/mikroterminal-interface-12.png)

</center>

The MAC address can be changed by typing "AT + MAC" command and clicking "write". The current MAC address can be read with "read" command.

* AT+GATEWAY(E/W)

It is used to define gateway to devices with Ethernet or Wi-Fi capability.

In a local network, the gateway is usually the IP address of the modem.

<center>

![mikroterminal-interface-13](/img/mikroterminal-interface-13.png)

</center>

AT + GATEWAY "command to read and write the gateway address.

* AT+NETMASK(E/W)

It is used to define "netmask" for devices with Ethernet or Wi-Fi capability.

<center>

![mikroterminal-interface-14](/img/mikroterminal-interface-14.png)

</center>

Netmask can be read and written with "AT + NETMASK" command.

* AT+ONLINE

It is used to start and stop the online viewing from the mikroterminal while online viewing is performed in Mikrodiagram.

Online monitoring is started when AT + ONLINE = 1 command is sent.

Online monitoring is stopped when AT + ONLINE = 0 command is sent.

* AT+VERSION

Mikrodev products software and hardware version information can be accessed with AT + VERSION command.

<center>

![mikroterminal-interface-15](/img/mikroterminal-interface-15.png)

</center>

The command "AT + VERSION" is only readable. The write operation can not be performed.

The "Quick user guide" contains detailed information on the version.

* AT+SERIALNO

The Mikrodev products serial number information can be accessed with the command "AT + SERIALNO".

<center>

![mikroterminal-interface-16](/img/mikroterminal-interface-16.png)

</center>

The command "AT + SERIALNO" is only readable. The write operation can not be performed.

The "Quick user guide" contains detailed information on the serial number.

*  AT+CONNECTION(G)

Connection status check of Mikrodev products with GSM data exchange feature is done by "AT + CONNECTION" command.

<center>

![mikroterminal-interface-17](/img/mikroterminal-interface-17.png)

</center>

The AT + CONNECTION command has only readability.

The AT + CONNECTION command receives even-numbered values 0-8.

The AT + CONNECTION command response table is below.

<center>

![mikroterminal-interface-18](/img/mikroterminal-interface-18.png)

</center>

*  AT+HELP

AT command list is reached. Information on the use of commands is also provided.

<center>

![mikroterminal-interface-19](/img/mikroterminal-interface-19.png)

</center>

Writable AT commands, AT commands giving status information are provided.

* AT+SETTIME

With the AT + SETTIME command, the device real time clock can be read and written.

<center>

![mikroterminal-interface-20](/img/mikroterminal-interface-20.png)

</center>

When the AT + SETTIME command "read" is clicked, the current time of the device  readable in the console window, the date and time to be set to the command window; When set to "dd-mm-yyyy h:m:s" and the "summer" command is sent, the time set is displayed in the console window.

* AT+ERROR

If the device is in error mode, it is used to learn the error code.

<center>

![mikroterminal-interface-21](/img/mikroterminal-interface-21.png)

</center>

If AT + ERROR = 0, then there is no error condition.

AT + ERROR = 61 means that the device does not have Mikrodiagram installed

The AT + ERROR command is only a readable command.

<center>

![mikroterminal-interface-22](/img/mikroterminal-interface-22.png)

</center>

* AT+DEFAULT

The AT + DEFAULT command is used to reset the unit to factory settings.

<center>

![mikroterminal-interface-23](/img/mikroterminal-interface-23.png)

</center>

When AT + DEFAULT = 1 command is written and "write" is clicked, the device is restored to factory settings.

When the device is restored to factory settings, the settings made with the AT commands are restored to factory settings, the most recently loaded Mikrodiagram project is deleted from the device.

After the command is sent, the device drops to error ERROR = 61

The command AT + DEFAULT is only writable.

* AT+RESET

The AT + RESET command is used for software restart of the device.

<center>

![mikroterminal-interface-24](/img/mikroterminal-interface-24.png)

</center>

When AT + RESET = 1 is typed and the "send" button is clicked, the device is restarted.

* AT+PLCRESET

<center>

![mikroterminal-interface-25](/img/mikroterminal-interface-25.png)

</center>

The AT + PLCRESET command is used when TCP communication protocols require the device to be reset after a certain period of time.

If AT + PLCRESET = 0 command is sent to the device, the command is disabled.

The AT + PLCRESET command runs at a minimum 60 second (sec) scale.

To learn the current PLCRESET command programmed in the device, enter AT + PLCRESET =? command can be sent to the device.

* AT+CONFIGPORT

<center>

![mikroterminal-interface-26](/img/mikroterminal-interface-26.png)

</center>

The AT + CONFIGPORT command is used to identify the port number used in situations where a TCP port connection from Mikrodiagram is desired to be installed on devices with a TCP communication port (Ethernet, GSM, Wi-Fi).

The factory default ConfigPort number is 502.

It can be changed with AT + CONFIGPORT command.

AT + = CONFIGPORT? command can be viewed with the current configport.

<center>

![mikroterminal-interface-27](/img/mikroterminal-interface-27.png)

</center>

CONFIGPORT is disabled when a selected TCP socket block is added to the device as a server Mikrodiagram. The device's listening port is the listening port that is inserted into the TCP socket block.

* AT+SERVERTIMEOUT

<center>

![mikroterminal-interface-28](/img/mikroterminal-interface-28.png)

</center>

* AT+FORMATFS

AT + FORMATFS = 1 command is used to format Mikrodev products. When the AT + FORMATFS = 1 command is sent to the device, the firmware will be deleted, so it is necessary to load the firmware again to program the device.

* AT+CANTIMEOUT

<center>

![mikroterminal-interface-29](/img/mikroterminal-interface-29.png)

</center>

AT + CANTIMEOUT command Mikrodev is used to protect the position of the inputs and outputs on the expansion units for a specified period of time in case of communication failure between CPU modules and expansion units.

The CANTIMEOUT time runs in millisecond (ms) time scale.

When the communication link between the input modules and the CPU breaks, inputs up to the number of CANTIMEOUT entered into the CPU do not change position in the software.

When the communication link between the output modules and the CPU breaks, the outputs do not change positions as long as the CANTIMEOUT times entered in the output modules.

The CANTIMEOUT time input to the CPU is used for the input modules, the CANTIMEOUT time input to the output modules for the output modules is used.

For example, if AT + CANTIMEOUT = 60000 (ms) is defined for the CPU and expansion units, the incoming digital input signal position is maintained through the expansion unit until 60000 (ms) (1 minute) after communication between the digital input (DI) expansion unit and the CPU is interrupted. 60000 ms. After the CANTIMEOUT time has elapsed, the digital inputs are pulled to logic (0) if no connection to the expansion unit is still present.

* AT+GPRSIP(G)

The data package (internet package) is the IP of the SIM card. Supplied by the GSM operator.

It can only be read by AT + GPRSIP command. Changed.

If the device is to be used as a server, a SIM card with a fixed IP address must be provided.

  When a SIM card with a fixed IP is provided, APN information must also be received from the GSM operator

* AT+GPRSAPN(G)

AT + GPRSAPN command is used to define APN for Mikrodev products with GSM TCP communication feature.

Since the APN that needs to be defined varies according to the SIM card operator used in the device,it must be supplied from the customer service of the relevant GSM operator.

The APN has to be defined if the used device is to be used as a server in the TCP communication with the GSM line (if the device will connect to another IP).

Note: The SIM card used in the APN-defined device must have a static IP

* AT+CSQ(G)

It is the value of the GSM signal quality (the power of the GSM line) that the devices with GSM capability are installed. It can be between -1 and 31.

Even if the SIM card is not inserted, the value can be read while the GSM antenna is connected. (Emergency calls are used on mobile phones when the SIM card is not inserted.)

AT + CSQ is only readable command.

The pull chart is as follows.

<center>

![mikroterminal-interface-30](/img/mikroterminal-interface-30.png)

</center>

*  AT+SIM(G)

It is used for SIM card inquiry in Mikrodev products with GSM hardware.

With "AT + SIM =?" read only command. The value can not be written.

If the answer to the command is SIM = 1, it indicates that the SIM card is correctly installed and is fault-free.

The response to the command is SIM = 0 to indicate that the SIM card is not inserted, is incorrectly installed or is defective.

* AT+WIFISSID(W)

It is used to identify the WI-FI network name to be included in WI-FI enabled products.

In the "AT + WIFISSID" command window, the WI-FI name is written, the "write" command is clicked,

When you want to read the current WI-FI SSID, click "AT + WIFISSID" "read" command.

* AT+WIFIPSSW(W)

It is used to describe the password of the WI-FI network to be included in WI-FI-enabled products.

AT + WIFIPSSW WI-FI password is written into the command window, click on the "write" command,

When the current WI-FI password is desired to be read, the AT + WIFIPSSW "read" command is clicked.

*  AT+TEMPTYPE

For products with RTD temperature sensor input, temperature sensor selection is made.

Hardware must be manufactured in accordance with the temperature sensor of the product.

The PT100 temperature sensor can be used if AT + TEMPTYPE = 0.

The NTC temperature sensor can be used if AT + TEMPTYPE = 1.

The PT1000 temperature sensor can be used if AT + TEMPTYPE = 2.

* AT+PRODUCTNO

Hardware product code inquiry for the products in Mikrodev product family is made.

The code that starts with the letter "p" (p42, p46, etc.) in the product embedded software (MP201_E_s11.09p42) must match the AT + PRODUCTNO code.

  AT + PRODUCTNO is the only readable command.

* AT+PTO

It is used to activate the "pulse train output" and "axis control" blocks.

AT + PTO = 1 command is activated. AT + PTO = 0 disable the command.

For current status inquiry, "AT + PTO =?" Command can be sent.

* AT+SOCKET

It is used to monitor the active connections of TCP socket blocks in Mikrodiagram project.

When AT + SOCKET = <"TCP Socket Block" Block Number> command is sent to the device, the connections made from the relevant TCP socket block are displayed.

Those with status "1" indicate that the connection exists. The "status" states, which are different from "1", indicate that the link already existed, but that the link broke down before the specified time.

<center>

![mikroterminal-interface-31](/img/mikroterminal-interface-31.png)

</center>

* AT+POWERCOUNT

It shows how many times the device is restarted after Mikrodiagram project is loaded. The first value is 1 since the device is restarted after the mikrordiagram project has been loaded.

Writable and readable command.

AT + = POWERCOUNT? , The current value is queried, and the desired value can be written with the command AT + POWERCOUNT = Set value

































