searchState.loadedDescShard("png", 0, "PNG encoder and decoder\nExpand paletted images to include an alpha channel. …\nFor images requiring preservation of absolute colorimetry, …\nThe filtering method for preprocessing scanline data …\nAnimation control information\nClear buffer with the background color.\nHigher compression level\nBit depth of the PNG file. Specifies the number of bits …\nHow pixels are written into the buffer.\nDescribes how a pixel is encoded.\nThe type and strength of applied compression.\nDecoder configuration options\nResult of the decoding process\nPNG Decoder\nAny kind of error during PNG decoding.\nDefault level\nHow to reset buffer of an animated png (APNG) at the end …\nExpand paletted images to RGB; expand grayscale images of …\nPNG Encoder.\nFast minimal compression\nThe byte level filter applied to scanlines to prepare them …\nThe input image was not a valid PNG.\nFrame control information\n1 grayscale sample.\n1 grayscale sample, then 1 alpha sample.\nNo transformation\nDecoded raw image data.\nThe last of a consecutive chunk of IDAT was done. This is …\n1 sample for the palette index.\nPNG info struct\nAn error in IO of the underlying reader.\nLimits on the resources the <code>Decoder</code> is allowed too use\nThe image would have required exceeding the limits …\nLeave the buffer unchanged.\nNothing decoded yet\nOutput info.\nThe new pixels are blended into the current state based on …\nAn interface was used incorrectly.\nFor images preferring good adaptation to the output device …\nPixel dimensions information\nReset the buffer to the state before the current frame.\nPNG reader (mostly high-level interface)\nFor images requiring colour appearance matching (relative …\n1 red sample, 1 green sample, 1 blue sample.\n1 red sample, 1 green sample, 1 blue sample, and finally, …\nStrip 16-bit samples to 8 bits\nFor images preferring preservation of saturation at the …\nAn unsigned integer scaled version of a floating point …\nPixels overwrite the value at their position.\nChromaticities of the color space primaries\nThe rendering intent for an sRGB image.\nStreaming PNG writer\nPNG StreamingDecoder (low-level interface)\nOutput transformations\nPhysical unit of the pixel dimensions\nPNG writer\nConvenience function to add iTXt chunks to <code>Info</code> struct\nConvenience function to add tEXt chunks to <code>Info</code> struct\nConvenience function to add zTXt chunks to <code>Info</code> struct\nReturns the set containing all flags.\nReturns the frame control information of the image.\nThe chosen output bit depth.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the number of bits per pixel.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nType of frame area rendering for this frame\nReturns the size needed to hold a decoded frame If the …\nmaximum number of bytes the decoder is allowed to …\nReturns the number of bytes per pixel.\nThe contents of the image’s <code>cHRM</code> chunk, if present. …\nChunk types and functions\nHow colors are stored in the image.\nThe chosen output color type.\nReturns the complement of this set of flags.\nzTXt field\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nFrame delay fraction denominator\nFrame delay fraction numerator\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nType of frame area disposal to be done after rendering …\nReturns an empty set of flags.\nEncode this header to the writer.\nGets whether the value can be exactly converted in …\nRead the rest of the image and chunks and finish up, …\nConsume the stream writer with validation.\nConsume the stream writer with validation.\nReturns the frame control information of the current frame\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nFully accurate construction from a value scaled as per …\nu8 -&gt; Self. Temporary solution until Rust provides a …\nu8 -&gt; Self. Temporary solution until Rust provides a …\nu8 -&gt; Self. Temporary solution until Rust provides a …\nu8 -&gt; Self. Using enum_primitive or transmute is probably …\nu8 -&gt; Self. Using enum_primitive or transmute is probably …\nu8 -&gt; Self. Temporary solution until Rust provides a …\nThe contents of the image’s gAMA chunk, if present. …\nHeight of the following frame\nThe pixel height of this frame.\nThe ICC profile for the image.\nReturn whether the decoder is set to ignore the Adler-32 …\nSet the decoder to ignore and not verify the Adler-32 …\nGets whether the value is within the clamped range of this …\nProvides access to the inner <code>info</code> field\nGet information on the image.\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the accurate encoded value.\nTurn this into a stream writer for image data.\nTurn this into a stream writer with custom buffer size.\nGet the unscaled value as a floating point.\nReturns <code>true</code> if all flags are currently set.\nReturns true if the image is an APNG image.\nReturns <code>true</code> if no flags are currently stored.\nThe byte count of each scan line in the image.\nCreates a new StreamingDecoder\nCreate a new decoder configuration with default limits.\nSlightly inaccurate scaling and quantization. Clamps the …\nCreate a new decoder configuration with custom limits.\nCreate a new decoder configuration with custom …\nDecodes the next frame into <code>buf</code>.\nReturns the next processed row of the image\nReturns the next processed row of the image\nTransform every input to 8bit grayscale or color.\nReturns the complement of this set of flags.\nNumber of frames\nNumber of times to loop this APNG.  0 indicates infinite …\nReturns the number of bytes required to hold a …\nReturns the color type and the number of bits per sample …\nReturns the number of bytes required to hold a …\nThe image’s <code>PLTE</code> chunk, if present; contains the RGB …\nReturns the number of bytes needed for one deinterlaced …\nReturns the number of bytes needed for one deinterlaced …\nReturns the number of bytes needed for one deinterlaced …\nRead the PNG header and return the information contained …\nReads all meta data until the first IDAT chunk\nRemoves the specified flags in-place.\nResets the StreamingDecoder\nSet the frame dimension to occupy all the image, starting …\nSet the frame dimension to occupy all the image, starting …\nSet the frame position to (0, 0).\nSet the frame position to (0, 0).\nReturns the number of samples used per pixel encoded in …\nSequence number of the animation chunk, starting from 0\nInserts or removes the specified flags depending on the …\nSet the adaptive filter type.\nSet the adaptive filter type for the following frames.\nSet the adaptive filter type for the next frame.\nSpecify that the image is animated.\nSet the blend operation for every frame.\nSet the blend operation for the following frames.\nSet the blend operation for the following frames.\nSet the color of the encoded image.\nSet compression parameters.\nSet the indicated depth of the image data.\nSet the dispose operation for every frame.\nSet the dispose operation for the following frames.\nSet the dispose operation for the following frames.\nSet the used filter type.\nSet the used filter type for the following frames.\nSet the used filter type for the next frame.\nSet the fraction of time every frame is going to be …\nSet the fraction of time the following frames are going to …\nSet the fraction of time the following frames are going to …\nSet the dimension of the following frames.\nSet the dimension of the following frames.\nSet the position of the following frames.\nSet the position of the following frames.\nSet whether to compute and verify the Adler-32 checksum …\nWhen set, the decoder will not compute and verify the …\nFlag to ignore computing and verifying the Adler-32 …\nSet whether to compute and verify the Adler-32 checksum …\nWhen set, the decoder will not compute and verify the CRC …\nSet the decoder to ignore all text chunks while parsing.\nIgnore text chunks while decoding.\nLimit resource usage.\nSets the raw byte contents of the PLTE chunk. This method …\nMark the first animated frame as a ‘separate default …\nIgnore ancillary chunks if CRC fails\nIgnore ancillary chunks if CRC fails\nSet the chromaticities for the source system’s display …\nSet the display gamma of the source system on which the …\nMark the image data as conforming to the SRGB color space …\nSet the allowed and performed transformations.\nSets the raw byte contents of the tRNS chunk. This method …\nSize of the image, width then height.\nChromaticities of the source system. Set by both <code>cHRM</code> as …\nGamma of the source system. Set by both <code>gAMA</code> as well as to …\nThe rendering intent of an SRGB image.\nCreate a stream writer.\nCreate a stream writer with custom buffer size.\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nText chunks (tEXt/zTXt/iTXt) structs and functions\nToggles the specified flags in-place.\nThe image’s <code>tRNS</code> chunk, if present; contains the alpha …\ntEXt field\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nEither <em>Meter</em> or <em>Unspecified</em>\nLow level StreamingDecoder interface.\niTXt field\nValidate the written image sequence.\nWidth of the following frame\nThe pixel width of this frame.\nA utility constructor for a default info with width and …\nWrite a raw chunk of PNG data.\nStart encoding by writing the header data.\nWrites the next image data.\nX position at which to render the following frame\nPixels per unit, X axis\nY position at which to render the following frame\nPixels per unit, Y axis\nImage data\nImage trailer\nImage header\nPalette\nAnimation control\nBackground colour\nSource system’s pixel chromaticities\nFrame control\nFrame data\nReturns the argument unchanged.\nSource system’s gamma value\nICC profile chunk\nUTF-8 textual data\nCalls <code>U::from(self)</code>.\nReturns true if the chunk is critical.\nReturns true if the chunk is private.\nPhysical pixel dimensions\nChecks whether the reserved bit of the chunk name is set. …\nsRGB color space chunk\nReturns true if the chunk is safe to copy if unknown.\nLatin-1 uncompressed textual data\nImage last-modification time\nTransparency\nLatin-1 compressed textual data\nDefault decompression limit for compressed text chunks.\nA generalized text chunk trait\nStruct encoding an iTXt chunk\nStruct representing a tEXt chunk\nStruct representing a zTXt chunk\nCompresses the inner text, mutating its own state.\nCompresses the inner text, mutating its own state.\nIndicates whether the text will be (or was) compressed in …\nDecompresses the inner text, mutating its own state. Can …\nDecompresses the inner text, mutating its own state. Can …\nDecompresses the inner text, mutating its own state. Can …\nDecompresses the inner text, mutating its own state. Can …\nEncode text chunk as Vec to a <code>Write</code>\nEncodes TEXtChunk to a Writer. The keyword and text are …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDecompresses the inner text, and returns it as a <code>String</code>. …\nDecompresses the inner text, and returns it as a <code>String</code>. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nKeyword field of the tEXt chunk. Needs to be between 1-79 …\nKeyword field of the tEXt chunk. Needs to be between 1-79 …\nThe keyword field. This needs to be between 1-79 bytes …\nA hyphen separated list of languages that the keyword is …\nConstructs a new TEXtChunk. Not sure whether it should …\nCreates a new ZTXt chunk.\nConstructs a new iTXt chunk. Leaves all but keyword and …\nText field of tEXt chunk. Can be at most 2GB.\nTranslated keyword. This is UTF-8 encoded.")