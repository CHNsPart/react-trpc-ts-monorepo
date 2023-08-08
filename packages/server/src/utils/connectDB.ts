import mongoose from 'mongoose';
import {customConfig} from '../config/dafault';
import colors from 'colors';

const dbUrl = customConfig.dbUri;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
        console.log(colors.bold('\n✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨'));
        console.log(('✨ '+ colors.bold.bgWhite.black(' Mongo Database connected ')+ ' ✨'));
        console.log(colors.bold(('✨ =========>'+ colors.bold.bgWhite.black(' 6000 ')+ '<========= ✨')));
        console.log(colors.bold('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨\n'));

  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;