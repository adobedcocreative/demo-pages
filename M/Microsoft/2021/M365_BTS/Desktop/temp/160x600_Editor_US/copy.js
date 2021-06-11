// JavaScript Document
	//  TEXT, TEXTSIZE, XPOS, YPOS, LINE SPACING, LINE WIDTH, JUSTIFYTEXT
	// use | for new line.  Use <#FFFFFF> for color change.
	// when this occurs you can use line height to adjust line spacing.
	// lineWidth is no longer needed.
	var bannerData = new Object()
		
	bannerData.intro1 = ['<#505050>Write with|confidence|where you|write most','18.2px',80,149,'24','350', 'center']
	
	bannerData.headline1 = ['<#737373>More|polish in|less time','32.3px',80,75,'34','50', 'center']

	bannerData.CTA = ['<#FFFFFF>Learn more','12.1px',0,0,'50','300', 'left']
	
	//	You can easily change the width of the CTA, scale the X width amount, default is 100%, also adjust X Y  offset position
	bannerData.CTAsize = [100,0,0]
	//  Do you want arrow to be visible? And move the arrow if you want to using X/Y offset values.
	bannerData.CTAarrowVisible = [true, 0,0]