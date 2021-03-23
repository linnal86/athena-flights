import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import { createStyles, makeStyles, Input, Button } from '@material-ui/core';
import Layout from '../components/Layout';
import Canvas from '../components/Canvas';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: 'auto',
      padding: '25px',
      border: '1px solid gray',
      borderRadius: '5px',
      color: 'white',
      backgroundColor: 'rgba(255,255,255,.05)',
    },
    input: {
      paddingRight: '5px',
      borderBottom: 'solid 2px white',
      color: 'white',
    },
  })
);

const IndexPage = () => {
  const [session, loading] = useSession();
  const classes = useStyles();

  return (
    <Layout>
      <Canvas />
      <div className={classes.container}>
        {!session && (
          <>
            {' '}
            Not signed in <br />
            <button onClick={() => signIn()}>Sign In</button>{' '}
          </>
        )}
        {session && (
          <>
            {' '}
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign Out</button>{' '}
          </>
        )}
        <h1>Book your flight to the stars 🚀</h1>
        <label className={classes.input}>From</label>
        <Input type='text' className={classes.input} />
        <label className={classes.input}>To</label>
        <Input className={classes.input} />
        <label className={classes.input}>Date</label>
        <Input type='date' className={classes.input} />
        <Button startIcon={<FlightTakeoff />}>Search</Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
