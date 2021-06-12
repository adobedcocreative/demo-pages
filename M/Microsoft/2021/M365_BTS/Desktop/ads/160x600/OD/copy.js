// JavaScript Document
	//  TEXT, TEXTSIZE, XPOS, YPOS, LINE SPACING, LINE WIDTH, JUSTIFYTEXT
	// use | for new line.  Use <#FFFFFF> for color change.
	// when this occurs you can use line height to adjust line spacing.
	// lineWidth is no longer needed.
	var bannerData = new Object()
		
	bannerData.intro1 = ['<#505050>Automatically|backup* with|up to 1 TB of|cloud storage','18.1px',80,147,'20','350', 'center']
	bannerData.intro2 = ['<#505050>*User must enable backup feature. Files|must be saved in Desktop, Pictures, or|Documents folders on Windows PCs only.','7.2px',80,255,'8','350', 'center']

	bannerData.headline1 = ['<#737373>OneDrive|has your|back(up)','32.2px',80,70,'34','50', 'center']

	bannerData.CTA = ['<#FFFFFF>Learn more','12.1px',0,0,'50','300', 'left']
	
	//	You can easily change the width of the CTA, scale the X width amount, default is 100%, also adjust X Y  offset position
	bannerData.CTAsize = [100,0,0]
	//  Do you want arrow to be visible? And move the arrow if you want to using X/Y offset values.
	bannerData.CTAarrowVisible = [true, 0,0]