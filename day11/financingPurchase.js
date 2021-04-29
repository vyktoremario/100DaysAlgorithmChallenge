function amort(rate, bal, term, num_payments) {
	let r = rate / 1200
  let d = (1-(1+r)**(-term))
  let c = r * bal/d
  for ( let i = 1; i < num_payments; i++) bal -= (c-(r*bal))
  
  return `num_payment ${num_payments} c ${c.toFixed(0)} princ ${(c-(r*bal)).toFixed(0)} int ${(r*bal).toFixed(0)} balance ${(bal-(c-r*bal)).toFixed(0)}`
  // please use .toFixed(0) to format numbers
}


/**
 * function amort(rate, bal, term, num_payments) {
  rate /= 1200
  let n = rate * bal
  let d = 1 - (1 + rate) ** (-term)
  let c = n / d
  let princ, int
  for (let i = 0; i < num_payments; ++i) {
    int = bal * rate
    princ = c - int
    bal -= princ
  }
  return `num_payment ${num_payments.toFixed(0)
  } c ${c.toFixed(0)
  } princ ${princ.toFixed(0)
  } int ${int.toFixed(0)
  } balance ${bal.toFixed(0)}`
}
 */