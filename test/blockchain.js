var chai = chai || require('chai')
var expect = chai.expect

var coloredcoinlib = coloredcoinlib || require('../src/index')
var blockchain = coloredcoinlib.blockchain


function testSimpleQueryAPI(bs) {
  it('getBlockCount', function(done) {
    bs.getBlockCount(function(error, response) {
      expect(error).to.be.null
      expect(response).to.be.a.number
      expect(response).to.be.at.least(0)
      done()
    })
  })
}

describe('BlockchaininfoBlockchainState', function() {
  testSimpleQueryAPI(new blockchain.BlockchaininfoBlockchainState())
})

describe('BlockexplorerBlockchainState', function() {
  testSimpleQueryAPI(new blockchain.BlockexplorerBlockchainState())
})
