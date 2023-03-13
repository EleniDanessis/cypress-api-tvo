describe('Basic API Testing', () => {

    // beforeEach(function(){
    //     cy.request('https://hmy0rc1bo2.execute-api.ca-central-1.amazonaws.com/graphql')
    //     .as('tvoGraphQLApi')
    // })
    it('Request Status - Test1', () => {
        
        cy.request('https://hmy0rc1bo2.execute-api.ca-central-1.amazonaws.com/graphql')
        .its('status')
        .should('eq', 200)

    })

    it('Request Status - Test2', () => {

        cy.request({
            method: 'POST',
            url:'https://hmy0rc1bo2.execute-api.ca-central-1.amazonaws.com/graphql',
            failOnStatusCode: false
        })
        .its('status')
        .should('eq', 500)

    })

    it('Header/Content - Type - Test3', () => {

        cy.request('https://hmy0rc1bo2.execute-api.ca-central-1.amazonaws.com/graphql')
        .its('headers')
        .its('content-type')
        .should('include','application/json')
    })

    const apiItems = [

        {"data":{"getTVOOrgStickyBanner":{"uuid":"21d67a21-5198-4a86-9b7c-98d18b1b71eb","bannerTitle":"Renew your support for TVO!","bannerCampaign":"Renewal Campaign","startTime":0,"endTime":0,"bannerCopy":"Donations provide powerful moments of learning for all Ontarians. From digital learning resources to TVOkids to documentaries and current affairs. Donate today!","ctaText":"Donate","ctaLink":"http://support.tvo.org/site/Donation2?df_id=11821&11821.donation=form1&mfc_pref=T","ctaButtonIcon":"heart","ctaButtonColour":"red","secondCTAText":"Remind me later","pageList":"/*","pageOption":"show","hideSecondCTA":false,"hideDesktop":false,"hideMobile":false,"hideTablet":false,"isPublished":true,"__typename":"TVOOrg_StickyInpage_banner"}}}

    ]

    it('Initial items from End Point - Test4', () => {

        cy.request('https://hmy0rc1bo2.execute-api.ca-central-1.amazonaws.com/graphql')
        .its('body')
        .should('deep.eq', apiItems)

    })

    it('JSON Schema Check - Test5', () => {

        cy.request('https://hmy0rc1bo2.execute-api.ca-central-1.amazonaws.com/graphql')
        .its('body')
        .each(value => {
            expect(value).to.have.all.keys('data','uuid')
        })

    })

    it('Using Alias Request - Test6', function() {

        cy.get('@tvoGraphQLApi').should()

    })

})