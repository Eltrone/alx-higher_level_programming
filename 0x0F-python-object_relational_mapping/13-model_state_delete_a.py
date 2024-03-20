#!/usr/bin/python3
"""Deletes all State objects with a name containing the letter a"""

import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State


if __name__ == "__main__":
    # Create an engine to connect to the database
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'
                           .format(sys.argv[1], sys.argv[2], sys.argv[3]),
                           pool_pre_ping=True)

    # Create a configured "Session" class
    Session = sessionmaker(bind=engine)

    # Create a Session
    session = Session()

    # Query all State objects with a name containing the letter "a"
    states_to_delete = session.query(State)\
                              .filter(State.name.like('%a%'))\
                              .all()

    # Delete each state object
    for state in states_to_delete:
        session.delete(state)

    # Commit the transaction
    session.commit()

    session.close()
