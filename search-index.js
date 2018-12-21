var N = null;var searchIndex = {};
searchIndex["synthrs"]={"doc":"","items":[[0,"errors","synthrs","Error types and trait implementation",N,N],[4,"SynthrsError","synthrs::errors","Represents a parsing error.",N,N],[13,"Parse","","File/format parse error",0,N],[13,"Io","","IO error (file could not read)",0,N],[6,"Result","","Re-exported `Result` for synthrs errors",N,N],[0,"filter","synthrs","A collection of signal filters.",N,N],[3,"DelayLine","synthrs::filter","A stateful delay line. Samples are delayed for…",N,N],[12,"buf","","",1,N],[12,"delay_length","","",1,N],[12,"delay_samples","","",1,N],[12,"sample_rate","","",1,N],[3,"AllPass","","A stateful all-pass filter.",N,N],[12,"feedback","","Feedback multiplier (0.5 works)",2,N],[3,"Comb","","A stateful comb filter.",N,N],[12,"dampening_inverse","","0.5 works",3,N],[12,"dampening","","0.5 works",3,N],[12,"feedback","","0.5 works",3,N],[5,"lowpass_filter","","Creates a low-pass filter. Frequencies below the cutoff…",N,[[["f64"],["f64"]],["vec",["f64"]]]],[5,"blackman_window","","Creates a Blackman window filter of a given size.",N,[[["usize"]],["vec",["f64"]]]],[5,"highpass_filter","","Creates a high-pass filter. Frequencies above the cutoff…",N,[[["f64"],["f64"]],["vec",["f64"]]]],[5,"bandpass_filter","","Creates a low-pass filter. Frequencies between…",N,[[["f64"],["f64"],["f64"]],["vec",["f64"]]]],[5,"bandreject_filter","","Creates a low-pass filter. Frequencies outside of…",N,[[["f64"],["f64"],["f64"]],["vec",["f64"]]]],[5,"spectral_invert","","Given a filter, inverts it. For example, inverting a…",N,N],[5,"convolve","","",N,N],[5,"add","","Performs elementwise addition of two `Vec<f64>`s. Can be…",N,N],[5,"cutoff_from_frequency","","Returns the cutoff fraction for a given cutoff frequency…",N,[[["f64"],["usize"]],["f64"]]],[5,"envelope","","Simple linear attack/decay envelope. No sustain or release.",N,[[["f64"],["f64"],["f64"]],["f64"]]],[11,"new","","Creates a new delay line. Samples are delayed for…",1,[[["f64"],["usize"]],["delayline"]]],[11,"read","","",1,[[["self"]],["f64"]]],[11,"write","","",1,[[["self"],["f64"]]]],[11,"new","","Creates a new all-pass filter. Samples are delayed for…",2,[[["f64"],["usize"],["f64"]],["allpass"]]],[11,"tick","","",2,[[["self"],["f64"]],["f64"]]],[11,"new","","Creates a new comb filter. Samples are delayed for…",3,[[["f64"],["usize"],["f64"],["f64"],["f64"]],["comb"]]],[11,"tick","","",3,[[["self"],["f64"]],["f64"]]],[0,"midi","synthrs","MIDI parsing routines",N,N],[3,"MidiSong","synthrs::midi","",N,N],[12,"max_time","","",4,N],[12,"time_unit","","",4,N],[12,"tracks","","",4,N],[12,"track_count","","",4,N],[12,"bpm","","",4,N],[3,"MidiTrack","","",N,N],[12,"events","","",5,N],[12,"max_time","","",5,N],[3,"MidiEvent","","",N,N],[12,"event_type","","",6,N],[12,"system_event_type","","",6,N],[12,"meta_event_type","","",6,N],[12,"time","","",6,N],[12,"channel","","",6,N],[12,"value1","","",6,N],[12,"value2","","",6,N],[4,"EventType","","",N,N],[13,"NoteOff","","",7,N],[13,"NoteOn","","",7,N],[13,"PolyponicKeyPressure","","",7,N],[13,"ControlChange","","",7,N],[13,"ProgramChange","","",7,N],[13,"ChannelPressure","","",7,N],[13,"PitchBendChange","","",7,N],[13,"System","","",7,N],[13,"Unknown","","",7,N],[4,"SystemEventType","","",N,N],[13,"SystemExclusive","","",8,N],[13,"TimeCodeQuaterFrame","","",8,N],[13,"SongPositionPointer","","",8,N],[13,"SongSelect","","",8,N],[13,"TuneRequest","","",8,N],[13,"EndOfSystemExclusive","","",8,N],[13,"TimingClock","","",8,N],[13,"Start","","",8,N],[13,"Continue","","",8,N],[13,"Stop","","",8,N],[13,"ActiveSensing","","",8,N],[13,"SystemResetOrMeta","","",8,N],[13,"Unknown","","",8,N],[4,"MetaEventType","","",N,N],[13,"SequenceNumber","","",9,N],[13,"TextEvent","","",9,N],[13,"CopyrightNotice","","",9,N],[13,"SequenceOrTrackName","","",9,N],[13,"InstrumentName","","",9,N],[13,"LyricText","","",9,N],[13,"MarkerText","","",9,N],[13,"CuePoint","","",9,N],[13,"MidiChannelPrefixAssignment","","",9,N],[13,"EndOfTrack","","",9,N],[13,"TempoSetting","","",9,N],[13,"SmpteOffset","","",9,N],[13,"TimeSignature","","",9,N],[13,"SequencerSpecificEvent","","",9,N],[5,"read_midi_file","","Convenience method for parsing a `Result<MidiSong>` from a…",N,[[["p"]],["result",["midisong"]]]],[5,"read_midi","","Parses a Read + Seek into a `Result<MidiSong>`.",N,[[["t"]],["result",["midisong"]]]],[11,"is_note_terminating","","",6,[[["self"]],["bool"]]],[0,"music","synthrs","Functions for calculating frequencies based off notes and…",N,N],[5,"note","synthrs::music","Calculates the frequency (equal-tempered) given A4, the…",N,[[["f64"],["usize"],["usize"]],["f64"]]],[5,"note_midi","","Calculates the frequency (equal-tempered) given A4 and the…",N,[[["f64"],["usize"]],["f64"]]],[0,"sample","synthrs","Functions for dealing with creating samples for…",N,N],[5,"samples_from_wave","synthrs::sample","Given a `crate::writer::Wave`, extract a `Vec<f64>` of…",N,N],[5,"samples_from_wave_bytes","","Given a bunch of bytes for a wave file, extract a…",N,[[["vec",["u8"]]],["result"]]],[5,"samples_from_wave_file","","Given a path to a wave file, extract a `Vec<f64>` of…",N,[[["str"]],["result"]]],[0,"synthesizer","synthrs","Generate audio samples from code.",N,N],[3,"SamplesIter","synthrs::synthesizer","An iterator that generates samples of a waveform at a…",N,N],[5,"quantize","","Quantizes a `f64` sample into `T`. Convert from [-1.0f64,…",N,[[["f64"]],["t"]]],[5,"unquantize","","Reverses a quantization from `T` into `f64`. Convert from…",N,[[["t"]],["f64"]]],[5,"quantize_samples","","Quantizes a `Vec<f64>` of samples into `Vec<T>`.",N,N],[5,"unquantize_samples","","Reverses quantization of `Vec<T>` into a `Vec<f64>`.",N,N],[5,"generate","","Invokes the waveform function `f` at time `t` to return…",N,[[["f64"],["f"]],["f64"]]],[5,"make_samples","","Given a generator waveform, returns a `Vec<f64>` of raw…",N,[[["f64"],["usize"],["f"]],["vec",["f64"]]]],[5,"peak_normalize","","Peak normalizes a `Vec<f64>` of samples such that the…",N,N],[5,"make_samples_from_midi_file","","Generates samples from a MIDI file",N,[[["f1"],["usize"],["bool"],["str"]],["result",["vec","synthrserror"]]]],[5,"make_samples_from_midi","","Generates samples from a MIDI file. Supports only one…",N,[[["f1"],["usize"],["bool"],["midisong"]],["result",["vec","synthrserror"]]]],[11,"new","","Returns an iterator that generates samples for the…",10,[[["u64"],["box",["fn"]]],["samplesiter"]]],[0,"wave","synthrs","A collection of waveform generating functions.",N,N],[5,"sine_wave","synthrs::wave","",N,N],[5,"square_wave","","",N,N],[5,"sawtooth_wave","","",N,N],[5,"triangle_wave","","",N,N],[5,"tangent_wave","","",N,N],[5,"bell","","",N,N],[5,"organ","","",N,N],[5,"karplus_strong","","Bastardised and butchered generic Karplus-Strong…",N,N],[5,"noise","","",N,N],[5,"sampler","","`sampler` creates a a generator function given a bunch of…",N,N],[5,"delay_line_generator","","Wraps a generator function, delaying its output by…",N,N],[5,"rising_linear","","`rising_linear` is a stateful generator function. Starting…",N,N],[0,"writer","synthrs","Writes audio samples to files. (Reads too, this module…",N,N],[3,"Wave","synthrs::writer","Representation of a WAV file. Does not contain fields for…",N,N],[12,"chunk_id","","",11,N],[12,"chunk_size","","",11,N],[12,"format","","",11,N],[12,"subchunk_1_id","","",11,N],[12,"subchunk_1_size","","",11,N],[12,"audio_format","","1 = PCM",11,N],[12,"num_channels","","",11,N],[12,"sample_rate","","",11,N],[12,"byte_rate","","",11,N],[12,"block_align","","",11,N],[12,"bits_per_sample","","",11,N],[12,"subchunk_2_id","","",11,N],[12,"subchunk_2_size","","",11,N],[12,"pcm","","",11,N],[5,"write_pcm_file","","Creates a file at `filename` and writes a bunch of…",N,N],[5,"write_pcm","","Writes a bunch of `&[i16]` samples to a `Write` as raw…",N,N],[5,"write_wav_file","","Creates a file at `filename` and writes a bunch of…",N,N],[5,"write_wav","","Writes a bunch of `&[i16]` samples to a `Write`. Also see…",N,N],[5,"read_wav_file","","Reads a wave file given a file path. Convenience wrapper…",N,[[["str"]],["result",["wave"]]]],[5,"read_wav","","Reads a wave file. Only supports mono 16-bit,…",N,[[["r"]],["result",["wave"]]]],[11,"from","synthrs::errors","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","synthrs::filter","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","synthrs::midi","",4,[[["t"]],["t"]]],[11,"into_iter","","",4,[[["self"]],["i"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into_iter","","",5,[[["self"]],["i"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"from","synthrs::synthesizer","",10,[[["t"]],["t"]]],[11,"into_iter","","",10,[[["self"]],["i"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"from","synthrs::writer","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"eq","synthrs::midi","",7,[[["self"],["eventtype"]],["bool"]]],[11,"eq","","",8,[[["self"],["systemeventtype"]],["bool"]]],[11,"eq","","",9,[[["self"],["metaeventtype"]],["bool"]]],[11,"from","synthrs::errors","",0,[[["error"]],["self"]]],[11,"clone","synthrs::filter","",1,[[["self"]],["delayline"]]],[11,"clone","","",2,[[["self"]],["allpass"]]],[11,"clone","","",3,[[["self"]],["comb"]]],[11,"clone","synthrs::midi","",7,[[["self"]],["eventtype"]]],[11,"clone","","",8,[[["self"]],["systemeventtype"]]],[11,"clone","","",9,[[["self"]],["metaeventtype"]]],[11,"clone","","",4,[[["self"]],["midisong"]]],[11,"clone","","",5,[[["self"]],["miditrack"]]],[11,"clone","","",6,[[["self"]],["midievent"]]],[11,"clone","synthrs::writer","",11,[[["self"]],["wave"]]],[11,"into_iter","synthrs::midi","",4,[[["self"]],["intoiter",["miditrack"]]]],[11,"into_iter","","",5,[[["self"]],["intoiter",["midievent"]]]],[11,"next","synthrs::synthesizer","",10,[[["self"]],["option",["f64"]]]],[11,"fmt","synthrs::errors","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","synthrs::filter","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","synthrs::midi","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","synthrs::writer","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","synthrs::errors","",0,[[["self"],["formatter"]],["result"]]],[11,"description","","",0,[[["self"]],["str"]]],[11,"cause","","",0,[[["self"]],["option",["error"]]]]],"paths":[[4,"SynthrsError"],[3,"DelayLine"],[3,"AllPass"],[3,"Comb"],[3,"MidiSong"],[3,"MidiTrack"],[3,"MidiEvent"],[4,"EventType"],[4,"SystemEventType"],[4,"MetaEventType"],[3,"SamplesIter"],[3,"Wave"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
