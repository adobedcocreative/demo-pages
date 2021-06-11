// JavaScript Document
	//  TEXT, TEXTSIZE, XPOS, YPOS, LINE SPACING, LINE WIDTH, JUSTIFYTEXT
	// use | for new line.  Use <#FFFFFF> for color change.
	// when this occurs you can use line height to adjust line spacing.
	// lineWidth is no longer needed.
	var bannerData = new Object()
		
	bannerData.intro1 = ['<#505050>Stay on task with work,|school—all of it ','20.3px',150,203,'22','350', 'center']

	bannerData.headline1 = ['<#737373>Stay on top|of your|schedule','45px',149,80,'47','50', 'center']

	bannerData.CTA = ['<#FFFFFF>Learn more','14px',0,0,'50','300', 'left']
	
	//	You can easily change the width of the CTA, scale the X width amount, default is 100%, also adjust X Y  offset position
	bannerData.CTAsize = [117.8,10,0]
	//  Do you want arrow to be visible? And move the arrow if you want to using X/Y offset values.
	bannerData.CTAarrowVisible = [true, -8,0]