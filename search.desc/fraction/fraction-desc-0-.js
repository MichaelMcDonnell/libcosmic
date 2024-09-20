searchState.loadedDescShard("fraction", 0, "Fraction is designed to be a precise lossless drop-in …\nA big signed integer type.\nA big unsigned integer type.\nNumbers which have upper and lower bounds\nPerforms addition that returns <code>None</code> instead of wrapping …\nPerforms division that returns <code>None</code> instead of panicking …\nPerforms multiplication that returns <code>None</code> instead of …\nPerforms subtraction that returns <code>None</code> instead of wrapping …\nDefines an associated constant representing the …\nDefines an associated constant representing the additive …\nA generic trait for converting a number to a value.\nGeneric implementation of the fraction type\nThe base trait for numeric types, covering <code>0</code> and <code>1</code> values, …\nThe multiplicative identity element of <code>Self</code>, <code>1</code>.\nA constant <code>Ratio</code> 1/1.\nDefines a multiplicative identity element for <code>Self</code>.\nRepresents the ratio between two numbers.\nSign representation\nUseful functions for signed numbers (i.e. numbers that can …\nA generic trait for converting a value to a number.\nThe additive identity element of <code>Self</code>, <code>0</code>.\nA constant <code>BigInt</code> with value 0, useful for static …\nA constant <code>Ratio</code> 0/1.\nA constant <code>BigUint</code> with value 0, useful for static …\nDefines an additive identity element for <code>Self</code>.\nComputes the absolute value.\nThe positive difference of two numbers.\nReinitializes a <code>BigInt</code>.\nAssign a value to a <code>BigUint</code>.\nReturns the ceil value of the average of <code>self</code> and <code>other</code>.\nReturns the ceil value of the average of <code>self</code> and <code>other</code>.\nReturns the floor value of the average of <code>self</code> and <code>other</code>.\nReturns the floor value of the average of <code>self</code> and <code>other</code>.\nReturns whether the bit in position <code>bit</code> is set, using the …\nReturns whether the bit in the given position is set\nDetermines the fewest bits necessary to express the <code>BigInt</code>,\nDetermines the fewest bits necessary to express the <code>BigUint</code>…\nReturns the truncated principal cube root of <code>self</code> – see …\nReturns the truncated principal cube root of <code>self</code> – see …\nRounds towards plus infinity.\nAdds two numbers, checking for overflow. If overflow …\nDivides two numbers, checking for underflow, overflow and …\nMultiplies two numbers, checking for underflow or …\nSubtracts two numbers, checking for underflow. If …\nOptimistic type conversion\nReturns the number of one bits.\nDecrements self by one.\nReturns zero\nGets an immutable reference to the denominator.\nImplementation of fmt::Display for GenericFraction and Sign…\nCeiled integer division.\nFloored integer division.\nSimultaneous floored integer division and modulus. Returns …\nSimultaneous truncated integer division and modulus. …\nDeprecated, use <code>is_multiple_of</code> instead.\nDeprecated, use <code>is_multiple_of</code> instead.\nDeprecated, use <code>is_multiple_of</code> instead.\nLossless integer division\nDynamic unsigned integer type selection\nCrate error types\nGreatest common divisor and Bézout coefficients.\nGreatest common divisor, least common multiple, and …\nGreatest common divisor, least common multiple, and …\nRounds towards minus infinity.\nReturns the fractional part of a number, with division …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates and initializes a <code>BigInt</code>.\nCreates and initializes a <code>BigInt</code>.\nCreates and initializes a <code>BigUint</code>.\nCreates and initializes a <code>BigInt</code>.\nCreates and initializes a <code>BigUint</code>.\nConverts a <code>f32</code> to return an optional value of this type. …\nConverts a <code>f64</code> to return an optional value of this type. …\nConverts a float into a rational number.\nConverts an <code>i128</code> to return an optional value of this type. …\nConverts an <code>i16</code> to return an optional value of this type. …\nConverts an <code>i32</code> to return an optional value of this type. …\nConverts an <code>i64</code> to return an optional value of this type. …\nConverts an <code>i8</code> to return an optional value of this type. …\nCreates a <code>Ratio</code> representing the integer <code>t</code>.\nConverts an <code>isize</code> to return an optional value of this …\nCreates and initializes a <code>BigInt</code>. Each <code>u8</code> of the input …\nCreates and initializes a <code>BigUint</code>. Each <code>u8</code> of the input …\nCreates and initializes a <code>BigInt</code>. Each <code>u8</code> of the input …\nCreates and initializes a <code>BigUint</code>. Each <code>u8</code> of the input …\nCreates and initializes a <code>BigInt</code> from an array of bytes in …\nCreates and initializes a <code>BigInt</code> from an array of bytes in …\nCreates and initializes a <code>BigInt</code>.\nCreates and initializes a <code>BigUint</code>.\nParses <code>numer/denom</code> or just <code>numer</code>.\nConvert from a string and radix (typically <code>2..=36</code>).\nCreates and initializes a <code>BigInt</code>.\nParses <code>numer/denom</code> where the numbers are in base <code>radix</code>.\nCreates and initializes a <code>BigUint</code>.\nConverts an <code>u128</code> to return an optional value of this type. …\nConverts an <code>u16</code> to return an optional value of this type. …\nConverts an <code>u32</code> to return an optional value of this type. …\nConverts an <code>u64</code> to return an optional value of this type. …\nConverts an <code>u8</code> to return an optional value of this type. …\nConverts a <code>usize</code> to return an optional value of this type. …\nGreatest Common Divisor (GCD).\nCalculates the Greatest Common Divisor (GCD) of the number …\nCalculates the Greatest Common Divisor (GCD) of the number …\nGreatest Common Divisor (GCD) and Lowest Common Multiple …\nCalculates the Greatest Common Divisor (GCD) and Lowest …\nCalculates the Greatest Common Divisor (GCD) and Lowest …\nInteger generic traits and operations\nIncrements self by one.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this <code>BigInt</code> into its <code>Sign</code> and <code>BigUint</code> magnitude, …\nDeconstructs a <code>Ratio</code> into its numerator and denominator.\nReturns <code>true</code> if the number is even.\nReturns <code>true</code> if the number is divisible by <code>2</code>.\nReturns <code>true</code> if the number is divisible by <code>2</code>.\nReturns true if the rational number is an integer …\nReturns <code>true</code> if <code>self</code> is a multiple of <code>other</code>.\nReturns <code>true</code> if the number is a multiple of <code>other</code>.\nReturns <code>true</code> if the number is a multiple of <code>other</code>.\nReturns true if the number is negative and false if the …\nReturns <code>true</code> if the number is odd.\nReturns <code>true</code> if the number is not divisible by <code>2</code>.\nReturns <code>true</code> if the number is not divisible by <code>2</code>.\nReturns <code>true</code> if <code>self</code> is equal to the multiplicative …\nReturns true if the number is positive and false if the …\nReturns <code>true</code> if <code>self</code> is equal to the additive identity.\nReturns an iterator of <code>u32</code> digits representation of the …\nReturns an iterator of <code>u32</code> digits representation of the …\nReturns an iterator of <code>u64</code> digits representation of the …\nReturns an iterator of <code>u64</code> digits representation of the …\nLowest Common Multiple (LCM).\nCalculates the Lowest Common Multiple (LCM) of the number …\nCalculates the Lowest Common Multiple (LCM) of the number …\nReturns the magnitude of the <code>BigInt</code> as a <code>BigUint</code>.\nReturns the largest finite number this type can represent\nReturns the smallest finite number this type can represent\nFloored integer modulo, satisfying:\nReturns the modular multiplicative inverse if it exists, …\nReturns the modular multiplicative inverse if it exists, …\nReturns <code>(self ^ exponent) mod modulus</code>\nReturns <code>(self ^ exponent) % modulus</code>.\nCreates and initializes a <code>BigInt</code>.\nCreates a new <code>Ratio</code>.\nCreates and initializes a <code>BigUint</code>.\nCreates a <code>Ratio</code> without checking for <code>denom == 0</code> or …\nRounds up to nearest multiple of argument.\nRounds up to nearest multiple of argument.\nRounds up to nearest multiple of argument.\nReturns the truncated principal <code>n</code>th root of <code>self</code> – See …\nReturns the truncated principal <code>n</code>th root of <code>self</code> – see …\nGets an immutable reference to the numerator.\nReturns the multiplicative identity element of <code>Self</code>, <code>1</code>.\nCreates and initializes a <code>BigInt</code>.\nCreates and initializes a <code>BigUint</code>. The input slice must …\nReturns <code>self ^ exponent</code>.\nRaises the <code>Ratio</code> to the power of an exponent.\nReturns <code>self ^ exponent</code>.\nPredefines some types for the most common use cases\nRounds down to nearest multiple of argument.\nRounds down to nearest multiple of argument.\nRounds down to nearest multiple of argument.\nReturns the reciprocal.\nReturns a reduced copy of self.\nRounds to the nearest integer. Rounds half-way cases away …\nSets or clears the bit in the given position, using the two…\nSets or clears the bit in the given position\nSets <code>self</code> to the multiplicative identity element of <code>Self</code>, <code>1</code>…\nSets <code>self</code> to the additive identity element of <code>Self</code>, <code>0</code>.\nReturns the sign of the <code>BigInt</code> as a <code>Sign</code>.\nReturns the sign of the number.\nReturns the truncated principal square root of <code>self</code> – …\nReturns the truncated principal square root of <code>self</code> – …\nConverts this <code>BigInt</code> into a <code>BigUint</code>, if it’s not …\nReturns the sign and the byte representation of the <code>BigInt</code> …\nReturns the byte representation of the <code>BigUint</code> in …\nReturns the sign and the byte representation of the <code>BigInt</code> …\nReturns the byte representation of the <code>BigUint</code> in …\nConverts the value of <code>self</code> to an <code>f32</code>. Overflows may map to …\nConverts the value of <code>self</code> to an <code>f64</code>. Overflows may map to …\nConverts the value of <code>self</code> to an <code>i128</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i16</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i32</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i64</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i8</code>. If the value cannot be\nConverts to an integer, rounding towards zero.\nConverts the value of <code>self</code> to an <code>isize</code>. If the value …\nReturns the integer in the requested base in big-endian …\nReturns the integer in the requested base in big-endian …\nReturns the integer in the requested base in little-endian …\nReturns the integer in the requested base in little-endian …\nReturns the two’s-complement byte representation of the …\nReturns the two’s-complement byte representation of the …\nReturns the integer formatted as a string in the given …\nReturns the integer formatted as a string in the given …\nConverts the value of <code>self</code> to a <code>u128</code>. If the value cannot …\nConverts the value of <code>self</code> to a <code>u16</code>. If the value cannot be\nConverts the value of <code>self</code> to a <code>u32</code>. If the value cannot be\nReturns the sign and the <code>u32</code> digits representation of the …\nReturns the <code>u32</code> digits representation of the <code>BigUint</code> …\nConverts the value of <code>self</code> to a <code>u64</code>. If the value cannot be\nReturns the sign and the <code>u64</code> digits representation of the …\nReturns the <code>u64</code> digits representation of the <code>BigUint</code> …\nConverts the value of <code>self</code> to a <code>u8</code>. If the value cannot be …\nConverts the value of <code>self</code> to a <code>usize</code>. If the value cannot …\nReturns the number of least-significant bits that are ones.\nReturns the number of least-significant bits that are zero,\nReturns the number of least-significant bits that are zero,\nRounds towards zero.\nReturns the additive identity element of <code>Self</code>, <code>0</code>.\nSame as fmt::Formatter, but allowing to change flags so we …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDivision state encapsulates remainder and divisor\nDivide two numbers and produce every single digit of the …\nProduces the fractional part of the decimal from a rest …\ndivide_rem co-routine implementation Performs the …\nDivide a fraction into a <code>Vec&lt;u8&gt;</code> of ASCII(utf8) chars\nCalculate the division result and pass every character …\nDivide a fraction into a <code>String</code>\nDivide a fraction into a writeable target implementing …\nCalculate the max possible length of division in …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA helper function to use in conjunction with …\nThe wrapper implementation\nRepresents the small type, implementing Copy and allocated …\nRepresents the huge type, implementing Clone. To be used …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nUnpacks the value\nTrying to divide something by Zero\nCould not perform division, or fill in the resulting buffer\nErrors external to the division algorithm still may be …\nIncapsulates fmt::Error\nIncapsulates io::Error\nNot enough capacity in underlying integer to perform a …\nHappens when we parse stuff from strings\nCould not convert a character into a digit or a string …\nThe base is not supported. E.g. a type only supports base …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMethods common to all integer types that could be used …\nReturns value 0 of the type\nReturns Maybe of 0\nReturns value 1 of the type\nReturns value 10 of the type\nReturns Maybe of 10\nReturns Maybe of 1\nReturns the sign and the value itself. Zero values must …\nBuilds integer of type T from another integer of type F in …\nHeap allocated <code>BigUint</code> for numerics and <code>usize</code> for precision\nFraction consisting from two <code>BigUint</code> numbers\nA big signed integer type.\nA big unsigned integer type.\nBasic Decimal based on 2 u64 numbers and one u8 for …\nStack allocated, but dynamically growing into heap if …\nStack allocated, but dynamically growing into heap if …\nFraction consisting from two <code>u64</code> numbers\nDecimal type implementation\nGeneric implementation of the fraction type\nReturns the absolute value of self\nTry to recalculate the representational precision …\nReturns the smallest integer greater than or equal to the …\nReturns the floating point category of the number\nReturns a reference to the denominator value\nReturns the largest integer less than or equal to the value\nReturns the fractional part of a number\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerates a GenericFraction from GenericFraction where T: …\nConvert from a GenericFraction\nReturns the current representational precision for the …\nReturns positive Infinity value\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGenerates a GenericFraction from GenericFraction where T: …\nReturns true if the value is not Infinity (does not matter …\nReturns true if the value is Infinity (does not matter …\nReturns true if the value is NaN\nReturns true if the number is neither zero, Infinity or NaN\nReturns true if the sign is negative\nReturns true if the sign is positive\nReturns minimal value greater than zero\nself.clone () * a + b\nReturns NaN value\nReturns negative Infinity value\nReturns zero with negative sign\nConstructs a new fraction with the specified numerator and …\nConstructs a new fraction with the specified numerator and …\nConstructs a new negative fraction with the specified …\nConstructs a new fraction without types casting, checking …\nThe same as fn new_raw, but allows explicitly set sign.\nReturns a reference to the numerator value\nTakes the reciprocal (inverse) of the value (1/x)\nReturns the nearest integer to the value (.5 goes away …\nSets representational precision for the Decimal The …\nReturns a reference to the sign value\nReturns Some(Sign) of the decimal, or None if NaN is the …\nReturns a number that represents the sign of self\nReturns the integer part of the value")