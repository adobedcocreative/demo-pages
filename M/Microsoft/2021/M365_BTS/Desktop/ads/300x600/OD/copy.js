// JavaScript Document
	//  TEXT, TEXTSIZE, XPOS, YPOS, LINE SPACING, LINE WIDTH, JUSTIFYTEXT
	// use | for new line.  Use <#FFFFFF> for color change.
	// when this occurs you can use line height to adjust line spacing.
	// lineWidth is no longer needed.
	var bannerData = new Object()
		
	bannerData.intro1 = ['<#505050>Automatically backup* with|up to 1 TB of cloud storage','20.2px',150,155,'22','350', 'center']
	bannerData.intro2 = ['<#505050>*User must enable backup feature. Files must be saved in|Desktop, Pictures, or Documents folders on Windows PCs only.','9.2px',150,223,'10','350', 'center']

	bannerData.headline1 = ['<#737373>OneDrive|has your|back(up)','45.2px',150,79,'48','50', 'center']

	bannerData.CTA = ['<#FFFFFF>Learn more','14.2px',0,0,'50','300', 'left']
	
	//	You can easily change the width of the CTA, scale the X width amount, default is 100%, also adjust X Y  offset position
	bannerData.CTAsize = [117.8,10,0]
	//  Do you want arrow to be visible? And move the arrow if you want to using X/Y offset values.
	bannerData.CTAarrowVisible = [true, -8,0]