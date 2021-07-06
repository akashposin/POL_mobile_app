import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Modal, Animated} from 'react-native';
import {theme} from '../constants';

const ModalComponent = ({visible, children, style}) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };

    toggleModal();
  }, [scaleValue, visible]);

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            {transform: [{scale: scaleValue}]},
            style,
          ]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: theme.Sizes.width / 1.2,
    backgroundColor: theme.Colors.white,
    height: theme.Sizes.height / 2,
    borderRadius: theme.Sizes.radius / 5,
  },
});

export default ModalComponent;
