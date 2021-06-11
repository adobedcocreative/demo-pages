// JavaScript Document
	//  TEXT, TEXTSIZE, XPOS, YPOS, LINE SPACING, LINE WIDTH, JUSTIFYTEXT
	// use | for new line.  Use <#FFFFFF> for color change.
	// when this occurs you can use line height to adjust line spacing.
	// lineWidth is no longer needed.
	var bannerData = new Object()
		
	//bannerData.intro1 = ['<#505050>Stay on task with work,|school—all of it ','18.1px',150,88,'20','350', 'center']

	bannerData.headline1 = ['<#737373>Stay on top of| your schedule','40px',160,63,'42 ','50', 'center']

	bannerData.CTA = ['<#FFFFFF>Learn more','15px',0,0,'50','300', 'left']
	
	//	You can easily change the width of the CTA, scale the X width amount, default is 100%, also adjust X Y  offset position
	bannerData.CTAsize = [100,0,0]
	//  Do you want arrow to be visible? And move the arrow if you want to using X/Y offset values.
	bannerData.CTAarrowVisible = [true, 0,0]